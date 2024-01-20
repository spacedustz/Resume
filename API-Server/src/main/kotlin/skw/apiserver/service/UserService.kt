package skw.apiserver.service

import lombok.RequiredArgsConstructor
import lombok.extern.slf4j.Slf4j
import org.apache.logging.log4j.LogManager
import org.apache.logging.log4j.Logger
import org.hibernate.boot.model.naming.IllegalIdentifierException
import org.slf4j.LoggerFactory
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import skw.apiserver.dto.SignInResponse
import skw.apiserver.dto.SignUpRequest
import skw.apiserver.dto.SignUpResponse
import skw.apiserver.entity.User
import skw.apiserver.repository.UserRepository

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
class UserService(
    private val userRepository: UserRepository,
    private val encoder: PasswordEncoder,

) {
    companion object {
        private val log: Logger = LogManager.getLogger(this.javaClass.name)
    }

    fun signUpUser(request: SignUpRequest) = SignUpResponse.createOf(
        try {
            userRepository.save(User.createOf(request, encoder))
        } catch (e: Exception) {
            log.error("이미 사용중인 아이디입니다.")
            throw IllegalArgumentException("이미 사용중인 아이디입니다.")
        }
    )

//    fun signIn(request: SignUpRequest): SignInResponse {
//        val user = userRepository.findByName(request.name)
//        ?.takeIf { encoder.matches(request.password, it.password) }
//            ?: throw IllegalIdentifierException("아이디 또는 비밀번호가 일치하지 않습니다.")
//
//        val token = tokenProvider.createToken("${user.id}:${user.type}")
//
//        return SignInResponse(user.name, user.type, token)
//    }
}