package com.ozomall.entity;

import io.swagger.annotations.ApiModel;
import lombok.Data;

@ApiModel
@Data
public class Result<T> {
    /**
     * 返回码
     */
    private Integer code;

    /**
     * 数据
     */
    private T data;

    /**
     * 消息
     */
    private String msg;
}
