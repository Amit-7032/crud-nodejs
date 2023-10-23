import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import axios from "axios";

// jest.mock("axios", () => {
//   return {
//       __esModule: true,
//       axios: jest.fn(),
//   };
// });

function sum(a,b) {
    return a+b;
}

// test("check sum is working properly", () => {
//     const result = sum(2,3);
//     expect(result).toBe(5)
// })

describe("Given App", () => {
  test("Test1", () => {
    const result = sum(2,3);
    expect(result).toBe(5)
  });
  test("Test2 List is render", () => {
    const component = shallow(<App />)
    const listExist = component.find("List").exists()
    expect(listExist).toBe(false)
    expect(component).toMatchSnapshot()
  });
  test("Test3", () => {
    const component = shallow(<App />)
    // const listExist = component.find("List").exists()
    // expect(listExist).toBe(false)
    expect(component).toMatchSnapshot()
  });
});
