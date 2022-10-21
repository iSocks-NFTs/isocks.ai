import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: ${(props) => (props.width ? props.width : "150px")};
  height: 100vh;
  box-shadow: 0px 0px 30px -15px rgba(1, 1, 1, 0.3);
  display: flex;
  justify-content: center;
`;

export const Icon = styled.div`
  box-shadow: 0px 0px 30px -15px rgba(1, 1, 1, 0.3);
  padding: 1rem;
  height: 40px;
  width: 40px;
  cursor: pointer;
`;

export const Component = styled.div`
  header {
    position: fixed;
    background: #221e1e;
    padding: 20px;
    width: 100%;
    margin-left: -8px;
    margin-top: -8px;
    height: 38px;
  }
  .left_side h3 {
    color: #fff;
    margin: 0;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 800;
  }

  .logout_button {
    padding: 5px;
    color: #fff;
    background: #ad0823;
    text-decoration: none;
    float: right;
    margin-top: -30px;
    margin-right: 40px;
    border-radius: 2px;
    font-size: 15px;
    font-weight: 700;
    transition: 0.5s;
    transition-property: background;
  }
  .logout_button:hover {
    background: #fc2347;
  }
  .sidebar {
    background: #000000;
    padding-top: 30px;
    position: fixed;
    left: 0;
    width: 250px;
    height: 100%;
    transition: 0.5s;
    transition-property: left;
  }
  .sidebar .profile_img {
    height: 100px;
    width: 100px;
    border-radius: 100px;
    margin-bottom: 10px;
  }
  .sidebar h4 {
    color: #fff;
    margin-top: 0;
    margin-bottom: 20px;
  }
  .sidebar a {
    color: #fff;
    display: inline-flex;
    align-items: center;
    column-gap: 1rem;
    width: 100%;
    line-height: 50px;
    text-decoration: none;
    padding-left: 30px;
    box-sizing: border-box;
    transition: 0.5s;
    transition-property: background;
  }
  .sidebar a:hover {
    background-color: #e60d31;
  }
  .sidebar i {
    padding-right: 15px;
  }
  label #sidebar_button {
    /* z-index:1; */
    color: #fff;
    position: fixed;
    left: 300px;
    font-size: 25px;
    margin: 5px 0;
    transition: 0.5s;
    transition-property: color;
  }
  label #sidebar_button:hover {
    color: rgb(207, 11, 11);
  }
  #check:checked ~ .sidebar {
    left: -180px;
  }
  #check:checked ~ .sidebar a span {
    display: none;
  }
  #check:checked ~ .sidebar a {
    font-size: 20px;
    margin-left: 170px;
    width: 80px;
  }
  #check {
    display: none;
  }
`;
