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
    @Column("product_id")
    private Long productId;

    @Column("product_name")
    private String productName;

    @Column("product_price")
    private Double productPrice;

    @Column("product_picture")
    private String productPictureUrl;

    @Column("product_status")
    private boolean productStatus;

    @Column("product_category")
    @Enumerated(value = EnumType.STRING)
    private ProductCategory productCategory;
}
