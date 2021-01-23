package com.ilgrig.production.repository;

import com.ilgrig.production.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
