package com.ilgrig.production.controller;

import com.ilgrig.production.domain.Order;
import com.ilgrig.production.domain.OrderProduct;
import com.ilgrig.production.dto.OrderFormDto;
import com.ilgrig.production.dto.OrderProductDto;
import com.ilgrig.production.service.OrderProductService;
import com.ilgrig.production.service.OrderService;
import com.ilgrig.production.service.ProductService;
import com.sun.istack.NotNull;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:4200")
public class OrderController {

    ProductService productService;
    OrderService orderService;
    OrderProductService orderProductService;

    public OrderController(ProductService productService, OrderService orderService, OrderProductService orderProductService) {
        this.productService = productService;
        this.orderService = orderService;
        this.orderProductService = orderProductService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public @NotNull
    Iterable<Order> list() {
        return this.orderService.getAllOrders();
    }

    @PostMapping
    public ResponseEntity<Order> create(@RequestBody OrderFormDto form) {
        List<OrderProductDto> formDTO = form.getProductOrders();
        productService.validateProductsExistence(formDTO);
        Order order = orderService.setOrder();
        setOrderProducts(formDTO, order);
        HttpHeaders headers = orderService.buildUri(order);

        return new ResponseEntity<>(order, headers, HttpStatus.CREATED);
    }

    private void setOrderProducts(List<OrderProductDto> formDTO, Order order) {
        List<OrderProduct> orderProducts = new ArrayList<>();
        for (OrderProductDto dto : formDTO) {
            orderProducts.add(orderProductService.create(new OrderProduct(
                    order, productService.getProduct(dto
                    .getProduct()
                    .getProductId()), dto.getQuantity())));
        }

        order.setOrderProducts(orderProducts);
        this.orderService.update(order);
    }
}