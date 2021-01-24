package com.ilgrig.production.service;

import com.ilgrig.production.domain.Order;
import com.ilgrig.production.domain.OrderStatus;
import com.ilgrig.production.repository.OrderRepository;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class OrderService {

    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Order create(Order order) {
        return orderRepository.save(order);
    }

    public void update(Order order) {
        orderRepository.save(order);
    }

    public HttpHeaders buildUri(Order order) {
        String uri = ServletUriComponentsBuilder
                .fromCurrentServletMapping()
                .path("/orders/{id}")
                .buildAndExpand(order.getId())
                .toString();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Location", uri);
        return headers;
    }

    public Order setOrder() {
        Order order = new Order();
        order.setStatus(OrderStatus.PAID.name());
        order = this.create(order);
        return order;
    }
}
