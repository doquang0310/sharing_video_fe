import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "../src/App";
import axios, { AxiosResponse } from "axios";
import AuthService from "../src/app/auth/services";
import { login } from "../src/app/auth/thunk";
import store from "../src/app/rootStore";
import VideoService from "../src/app/videos/services";

describe("App", () => {
  test("loading", () => {
    render(<App />);
    const loadingElement = screen.getByTestId("loading-element");
    expect(loadingElement).toBeInTheDocument();
    // test render app
  });
  test("render app", async () => {
    await act(async () => {
      render(<App />);
    });
    const loadingElement = screen.queryByTestId("loading-element");
    const homeElement = screen.queryByTestId("home-element");
    expect(loadingElement).not.toBeInTheDocument();
    expect(homeElement).toBeInTheDocument();
    // test render app
  });

  // test login
  test("login fail (email or psw is empty)", async () => {
    await act(async () => {
      render(<App />);
    });
    jest.spyOn(window, "alert").mockImplementation(() => {});
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const loginButton = screen.getByTestId("login-button");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(loginButton);
    });
    expect(window.alert).toBeCalledWith("Email or password is empty");
  });

  test("input email & password", async () => {
    await act(async () => {
      render(<App />);
    });
    jest.spyOn(window, "alert").mockImplementation(() => {});
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const loginButton = screen.getByTestId("login-button");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();

    await act(async () => {
      fireEvent.input(emailInput, {
        target: { value: "doquang0310@gmail.com" },
      });
      fireEvent.input(passwordInput, { target: { value: "123123" } });
    });
    expect(emailInput).toHaveValue("doquang0310@gmail.com");
    expect(passwordInput).toHaveValue("123123");
  });

  test("input wrong email type", async () => {
    await act(async () => {
      render(<App />);
    });
    jest.spyOn(window, "alert").mockImplementation(() => {});
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const loginButton = screen.getByTestId("login-button");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();

    await act(async () => {
      fireEvent.input(emailInput, { target: { value: "doquang0310" } });
      fireEvent.input(passwordInput, { target: { value: "123123" } });
      fireEvent.click(loginButton);
    });
    expect(emailInput).toHaveValue("doquang0310");
    expect(passwordInput).toHaveValue("123123");
    expect(window.alert).toBeCalledWith("Email is invalid");
  });

  test("login success & log out", async () => {
    await act(async () => {
      render(<App />);
    });
    jest.spyOn(window, "alert").mockImplementation(() => {});
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const loginButton = screen.getByTestId("login-button");
    const resultLogin = {
      data: {
        user: {
          email: "doquang0310@gmail.com",
          accessToken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJkb3F1YW5nMDMxMEBnbWFpbC5jb20iLCJpYXQiOjE2ODYyMTI3MjgsImV4cCI6MTY4NjIxMzYyOH0.GY2I_VAAIgdYMRgDUrzfRMYjaJbfub9exs762uBiZ-I",
        },
      },
    };
    const resultAxiosResponse:
      | AxiosResponse<any, any>
      | Promise<AxiosResponse<any, any>> = {
      data: resultLogin,
      status: 200,
      statusText: "OK",
      headers: {
        "content-length": "248",
        "content-type": "application/json; charset=utf-8",
      },
      config: {
        transitional: {
          silentJSONParsing: true,
          forcedJSONParsing: true,
          clarifyTimeoutError: false,
        },
        adapter: ["xhr", "http"],
        transformRequest: [],
        transformResponse: [],
        timeout: 30000,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {},
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        } as any,
        responseType: "json",
        method: "post",
        url: "http://localhost:3000/auth/login",
        data: '{"email":"doquang0310@gmail.com","password":"1234567"}',
      },
      request: {},
    };
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();

    await act(async () => {
      fireEvent.input(emailInput, {
        target: { value: "doquang0310@gmail.com" },
      });
      fireEvent.input(passwordInput, { target: { value: "1234567" } });

      jest.spyOn(axios, "post").mockResolvedValue(resultLogin);
      jest.spyOn(AuthService, "login").mockResolvedValue(resultAxiosResponse);
      jest.spyOn(store, "dispatch").mockImplementation(() => {
        null;
      });
      fireEvent.click(loginButton);
    });

    const emailHeader = screen.getByTestId("email-header");

    expect(emailHeader).toBeInTheDocument();
    expect(emailHeader).toHaveTextContent("doquang0310@gmail.com");
    expect(emailInput).not.toBeInTheDocument();
  });

  // write test for go to the UploadVideo page
  test("go to UploadVideo page", async () => {
    await act(async () => {
      render(<App />);
    });
    const createVideo = screen.getByTestId("create-video");
    expect(createVideo).toBeInTheDocument();
    await act(async () => {
      fireEvent.click(createVideo);
    });
    const uploadVideo = screen.getByTestId("upload-video");
    expect(uploadVideo).toBeInTheDocument();
  });

  test("submit Video with wrong url", async () => {
    await act(async () => {
      render(<App />);
    });
    const uploadVideo = screen.getByTestId("upload-video");
    const urlInput = screen.getByTestId("url-input");
    const submitButton = screen.getByTestId("create-video-button");
    expect(uploadVideo).toBeInTheDocument();

    await act(async () => {
      fireEvent.input(urlInput, { target: { value: "234234" } });
      fireEvent.click(submitButton);
    });

    expect(window.alert).toBeCalledWith("Url is not valid");
  });
  test("submit Video with empty url", async () => {
    await act(async () => {
      render(<App />);
    });
    const uploadVideo = screen.getByTestId("upload-video");
    const urlInput = screen.getByTestId("url-input");
    const submitButton = screen.getByTestId("create-video-button");
    expect(uploadVideo).toBeInTheDocument();

    await act(async () => {
      fireEvent.input(urlInput, { target: { value: "" } });
      fireEvent.click(submitButton);
    });

    expect(window.alert).toBeCalledWith("Url is empty");
  });
});
