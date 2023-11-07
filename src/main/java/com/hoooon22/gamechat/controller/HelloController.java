package com.hoooon22.gamechat.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
public class HelloController {
    @GetMapping("/api/demo-web")
    public List<String> Hello() {
        System.out.println("React Connect");
        return Arrays.asList("리액트 스프링 ", "연결 성공");
    }
}
