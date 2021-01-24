package com.ilgrig.production.dto;

import com.ilgrig.production.domain.Product;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderProductDto {
    private Product product;
    private Integer quantity;
}
