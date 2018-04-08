package com.modoo.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.modoo.entity.TUser;
import com.modoo.model.FilterModel;
import com.modoo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@RestController
@RequestMapping({"/order"})
public class OrderController {
    @Autowired
    private UserService userService;

    @GetMapping(value = "/view")
    public ModelAndView view(TUser user) {
        ModelAndView mv = new ModelAndView("wenshuai/order");
        return mv;
    }

    @RequestMapping(value = "/")
    public Object list(FilterModel filterModel) {
        PageHelper.startPage(filterModel.getStartIndex(), filterModel.getPageSize());
        List<TUser> userList = userService.selectAllEntities(filterModel.getFilterStr(),filterModel.getSidx(),filterModel.getSord());
        PageInfo<TUser> p=new PageInfo<TUser>(userList);
        return "cccccc3c";
    }
}
