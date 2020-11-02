package com.newxton.nxtframework.entity;

import java.io.Serializable;

/**
 * (NxtDeliveryConfig)实体类
 *
 * @author makejava
 * @since 2020-11-02 19:03:31
 */
public class NxtDeliveryConfig implements Serializable {
    private static final long serialVersionUID = 673718229131279751L;
    /**
    * 运费模版
    */
    private Long id;
    /**
    * 名称
    */
    private String name;
    /**
    * 类型：（1:按重量 2:按体积）
    */
    private Integer type;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

}