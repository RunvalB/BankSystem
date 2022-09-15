package com.BankSystem.entity;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User {

	@Id
	@GeneratedValue(strategy =  GenerationType.IDENTITY)
	private Long id;

	@Column( name = "NAME")
	private String name;

	@Column( name = "EMAIL")
	private String email;

	@Column( name = "PASSWORD")
	private String password;

	@Column( name = "ADDRESS")
	private String address;

	@Column(name="ROLE")
	@Enumerated(EnumType.STRING)
	private Roles role;

	public User(String username, String email, String password, String address, Roles user) {
		this.name = username;
		this.email = email;
		this.password =password;
		this.address = address;
		this.role =user;
	}
}
