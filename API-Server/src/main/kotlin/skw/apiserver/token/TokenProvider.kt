package skw.apiserver.token

import io.jsonwebtoken.Jwts
import io.jsonwebtoken.SignatureAlgorithm
import lombok.RequiredArgsConstructor
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.PropertySource
import org.springframework.stereotype.Service
import java.sql.Timestamp
import java.time.Instant
import java.time.LocalDateTime
import java.time.temporal.ChronoUnit
import java.util.Date
import javax.crypto.spec.SecretKeySpec

@Service
@PropertySource("classpath:jwt.yml")
@RequiredArgsConstructor
class TokenProvider(
    @Value("\${secret-key}")
    private val secretKey: String,

    @Value("\${expiration-hours}")
    private val expirationHours: Long,

    @Value("\${issuer}")
    private val issuer: String
) {
    fun createToken(userSpecification: String) = Jwts.builder()
        .signWith(SecretKeySpec(secretKey.toByteArray(), SignatureAlgorithm.HS512.jcaName)) // HS512 알고리즘 / secretKey를 이용해 서명
        .setSubject(userSpecification) // 토큰의 Subject 설정
        .setIssuer(issuer) // 발급자
        .setIssuedAt(Timestamp.valueOf(LocalDateTime.now())) // 토큰 발급 시간
        .setExpiration(Date.from(Instant.now().plus(expirationHours, ChronoUnit.HOURS))) // 토큰 만료시간 설정 -> 3시간
        .compact()!! // 토큰 생성
}