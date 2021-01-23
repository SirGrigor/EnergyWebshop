package com.ilgrig.production.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "product_id")
    private Long productId;

    @Column(columnDefinition = "product_name")
    private String productName;

    @Column(columnDefinition = "product_price")
    private Double productPrice;

    @Column(columnDefinition = "product_picture")
    private String productPictureUrl;

    @Column(columnDefinition = "product_status")
    private boolean productStatus;

    @Column(columnDefinition = "product_category")
    @Enumerated(value = EnumType.STRING)
    private ProductCategory productCategory;
}
