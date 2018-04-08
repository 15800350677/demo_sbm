package com.modoo.entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Data
@Getter
@Setter
public class TOrder {
    private Integer id;

    private Date orderTime;

    private String clerk;

    private Double total;

    private String remark;

}