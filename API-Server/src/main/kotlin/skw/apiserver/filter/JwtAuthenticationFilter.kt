package skw.apiserver.filter

import jakarta.servlet.FilterChain
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.core.annotation.Order
import org.springframework.http.HttpHeaders
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.core.userdetails.User
import org.springframework.security.web.authentication.WebAuthenticationDetails
import org.springframework.stereotype.Component
import org.springframework.web.filter.OncePerRequestFilter
import skw.apiserver.token.TokenProvider

/**
 * @Order : 의존성 주입 우선순위 최상위로 설정
 */
@Order(0)
@Component
class JwtAuthenticationFilter(
    private val tokenProvider: TokenProvider
) : OncePerRequestFilter() {
    override fun doFilterInternal(
        request: HttpServletRequest,
        response: HttpServletResponse,
        filterChain: FilterChain
    ) {
        val token = parseBearerToken(request)
        val user = parseUserSpecification(token)

        UsernamePasswordAuthenticationToken.authenticated(user, token, user.authorities
            .apply { WebAuthenticationDetails(request) })
            .also { SecurityContextHolder.getContext().authentication = it }
    }

    /**
     * Token Type 검증, 접두어를 제외한 토큰값 파싱, 검증 실패 시 null 반환
     */
    private fun parseBearerToken(request: HttpServletRequest) = request.getHeader(HttpHeaders.AUTHORIZATION)
        .takeIf { it?.startsWith("Bearer", true) ?: false }?.substring(7)

    /**
     * User Name, Type을 기반으로 User 객체 반환, 토큰의 null 여부 & 토큰 길이 검증
     * 비밀번호는 로그인 API를 호출할 때 검증을 했으므로 빈 문자열을 넘김
     */
    private fun parseUserSpecification(token: String?) = (
            token?.takeIf { it.length >= 10 }
                ?.let { tokenProvider.validateTokenAndGetSubject(it) }
                ?: "anonymous:anonymous"
            ).split(":")
        .let { User(it[0], "", listOf(SimpleGrantedAuthority(it[1]))) }
}