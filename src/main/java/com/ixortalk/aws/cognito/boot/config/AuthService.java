/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2016-present IxorTalk CVBA
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
package com.ixortalk.aws.cognito.boot.config;

import com.google.gson.Gson;
import com.ixortalk.aws.cognito.boot.util.CognitoJWT;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Base64;

@Service
public class AuthService {

    @Value("${endpoints.token}")
    private String tokenUrl;

    @Value("${cognito.client}")
    private String clientId;

    @Value("${cognito.secret}")
    private String clientSecret;

    @Value("${cognito.callback}")
    private String callbackUrl;


    public CognitoJWT getToken(String code) {
        RestTemplate client = new RestTemplate();
        LinkedMultiValueMap headers = new LinkedMultiValueMap();

        String preBase64String = this.clientId + ":" + this.clientSecret;
        String auth = Base64.getEncoder().encodeToString(preBase64String.getBytes());

        headers.add("HeaderName", "value");
        headers.add("Authorization", "Basic " + auth);
        headers.add("Content-Type", "application/x-www-form-urlencoded");
        String response = "";
        HttpEntity<String> req = new HttpEntity<>(response, (MultiValueMap) headers);

        String url = this.tokenUrl + "?grant_type=authorization_code&client_id=" + this.clientId + "&code=" + code + "&redirect_uri=" + this.callbackUrl;

        ResponseEntity<String> responseEntity = null;
        responseEntity = client.exchange(url, HttpMethod.POST, req, String.class);

        Gson gson = new Gson();
        CognitoJWT cognitoJWT = gson.fromJson(responseEntity.getBody(), CognitoJWT.class);

        return cognitoJWT;
    }


}
