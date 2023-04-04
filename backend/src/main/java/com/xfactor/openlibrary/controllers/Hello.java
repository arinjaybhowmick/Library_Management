package com.xfactor.openlibrary.controllers;

import java.util.HashMap;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("hellocontroller")
public class Hello {

    @GetMapping("/hello")
    public String hello(@RequestParam String name,@RequestParam int id,@RequestParam float balance) {
        String out = "Hello " + name + " to Library ";
        out+= "Your id is " + id + " and your balance is " + balance;
        return out;
    }

    @GetMapping("/hi/{name}/{id}")
    public HashMap<String,Object> sayhi(@PathVariable String name,@PathVariable int id,@RequestParam float balance) {
        HashMap<String, Object> objectHashMap = new HashMap<String,Object>();
        objectHashMap.put("name", name);
        objectHashMap.put("id",id);
        objectHashMap.put("balance",balance);
        return objectHashMap;
    }
}
