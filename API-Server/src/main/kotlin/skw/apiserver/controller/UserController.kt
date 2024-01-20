package skw.apiserver.controller

import lombok.RequiredArgsConstructor
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import skw.apiserver.dto.ApiResponse
import skw.apiserver.dto.SignInRequest
import skw.apiserver.dto.SignUpRequest
import skw.apiserver.service.UserService

@RestController
@RequestMapping
@RequiredArgsConstructor
class UserController(
    private val userService: UserService
) {
    /* User 기능 */
    @PostMapping("/sign-up")
    fun signUp(@RequestBody request: SignUpRequest) = ApiResponse.success(userService.signUpUser(request))

    @PostMapping("/sign-in")
    fun signIn(@RequestBody request: SignInRequest) = ApiResponse.success(userService.signIn(request))

    /* Admin 기능 */
    @GetMapping("/admin/users")
    fun getAllUser() = ApiResponse.success(userService.getUsers())

    @GetMapping("/admin/admins")
    fun getAllAdmins() = ApiResponse.success(userService.getAdmins())
}