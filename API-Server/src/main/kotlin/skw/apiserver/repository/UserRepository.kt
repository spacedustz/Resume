package skw.apiserver.repository

import org.springframework.data.jpa.repository.JpaRepository
import skw.apiserver.entity.User
import skw.apiserver.enum.UserType
import java.util.UUID

interface UserRepository : JpaRepository<User, UUID> {
    fun findByName(name: String): skw.apiserver.entity.User?
    fun findAllByType(type: UserType): List<User>
}