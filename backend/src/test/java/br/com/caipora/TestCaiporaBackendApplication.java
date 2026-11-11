package br.com.caipora;

import org.springframework.boot.SpringApplication;

public class TestCaiporaBackendApplication {

	public static void main(String[] args) {
		SpringApplication.from(CaiporaBackendApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
