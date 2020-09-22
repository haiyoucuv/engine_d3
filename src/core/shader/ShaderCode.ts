/*
 * Created by 还有醋v on 2020/9/22.
 * Copyright © 2020 haiyoucuv. All rights reserved.
 */

export const BASE_SHADER = {
    VERTEX: `attribute vec3 pos;
        attribute vec3 color;
        attribute vec3 normal;// 法向量
        
        uniform mat4 normalMat;// 法线矩阵
        
        uniform mat4 vp;// vp
        uniform mat4 model;// m
        
        varying vec3 v_normal;
        varying vec4 v_pos;
        varying vec3 v_color;
        
        void main(){
            
            vec4 fragPos = model * vec4(pos, 1.0);// 顶点位置
            gl_Position = vp * fragPos;
            
            v_pos = fragPos;
            v_color = color;
            
            // 光线和法向量关系
            v_normal = normalize(mat3(normalMat) * normal);// 归一化
        
        }`,
    FRAG: `precision mediump float;
        
        varying vec3 v_normal;
        varying vec4 v_pos;
        varying vec3 v_color;
        
        uniform float alpha;// 透明度
        
        uniform vec3 lightColor;// 光照颜色
        uniform vec3 lightPos;// 光照方向
        
        uniform vec3 viewPos;// 摄像机位置
        
        float ambientStrength = 0.1;// 环境光强度
        float specularStrength = 0.5;// 镜面光强度
        
        void main(){
            vec3 lightDir = normalize(lightPos - v_pos.xyz);// 计算光线方向
            
            // 计算漫反射
            float nDotL = max(dot(lightDir, v_normal), 0.0);// 计算漫反射强度
            vec3 diffuse = lightColor * nDotL;// 计算漫反射
            
            // 计算镜面反射
            vec3 viewDir = normalize(viewPos - vec3(v_pos));// 计算观察方向向量
            vec3 reflectDir = reflect(-lightDir, v_normal);// 计算反射方向向量
            // 计算镜面分量
            float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32.0);
            vec3 specular = specularStrength * spec * lightColor;
            
            // 计算最终颜色
            vec3 result = (ambientStrength + diffuse + specular) * v_color;
            
            gl_FragColor = vec4(result, alpha);
        }`
};
