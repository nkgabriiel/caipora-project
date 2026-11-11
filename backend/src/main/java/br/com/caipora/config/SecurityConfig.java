package br.com.caipora.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.security.web.servlet.util.matcher.PathPatternRequestMatcher;

/**
 * Regras de acesso da API.
 *
 * - Leitura do conteudo publico (GET /api/public/**) e o health check: abertos.
 * - /error aberto: quando algo falha (ex.: banco fora do ar), o Spring encaminha a requisicao
 *   para /error. Se essa rota exigisse login, o visitante receberia 401 em vez de 500.
 * - Todo o resto exige login com Google.
 *   ATENCAO (fase 4): "logado" ainda nao significa "da equipe". Qualquer conta Google passa.
 *   Antes de criar /api/admin/**, restringir a um papel dado so aos e-mails da equipe.
 * - Na API, quem nao esta logado recebe 401 em vez de ser redirecionado para a tela do Google,
 *   para o frontend saber tratar o erro.
 */
@Configuration
public class SecurityConfig {

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(acesso -> acesso
                        .requestMatchers(HttpMethod.GET, "/api/public/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/actuator/health", "/actuator/health/**").permitAll()
                        .requestMatchers("/error").permitAll()
                        .anyRequest().authenticated())
                .exceptionHandling(erros -> erros.defaultAuthenticationEntryPointFor(
                        new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED),
                        PathPatternRequestMatcher.pathPattern("/api/**")))
                .oauth2Login(Customizer.withDefaults());
        return http.build();
    }
}
