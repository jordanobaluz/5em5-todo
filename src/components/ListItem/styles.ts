import styled from "styled-components";
type ContainerProps = {
  done: boolean;
};
export const Container = styled.div(
  ({ done }: ContainerProps) => `
display: flex;
background-color: #232946;
padding: 10px;
border-radius: 10px;
margin-bottom: 10px;
align-items: center;
justify-content: space-between;

input {
  width: 25px;
  height: 25px;
  margin-right: 5px;
}

label {
  color: #FFFFFE;
  text-decoration: ${done ? "line-through" : "initial"};
  width: -webkit-fill-available; 
}
button {
  background-color: #FFFFFE
}
`
);
