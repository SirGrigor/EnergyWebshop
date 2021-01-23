package com.ilgrig.production.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;
    private String productName;
    private Double productPrice;
    private String productPictureUrl;
    private boolean isActive;
    @Enumerated(value = EnumType.STRING)
    private ProductCategory productCategory;
}
