package com.ilgrig.production.repository;

import com.ilgrig.production.domain.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
