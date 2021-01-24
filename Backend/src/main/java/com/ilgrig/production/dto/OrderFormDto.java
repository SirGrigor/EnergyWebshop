package com.ilgrig.production.dto;

import lombok.Data;

import java.util.List;

@Data
public class OrderFormDto {

    private List<OrderProductDto> productOrders;

    public List<OrderProductDto> getProductOrders() {
        return productOrders;
    }
}