package com.hoooon22.gamechat.controller.Time;

import java.util.Date;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController
@RequestMapping("/api/time")
public class TimeController {

    @RequestMapping(value="/getNow", method=RequestMethod.GET)
    public String getNow() {
        return "현재 시간은 " + new Date() + " 입니다.";
    }
}
