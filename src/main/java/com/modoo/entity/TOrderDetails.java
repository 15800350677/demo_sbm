package com.modoo.entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class TOrderDetails {
    private Integer id;

    private Integer orderId;

    private String medName;

    private String medSpecification;

    private Integer medGyzz;

    private Integer medAmount;

    private Integer medUnitPrice;

    private Integer medTotalPrice;

    private String remark;

}