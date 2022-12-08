import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;
  overflow: auto;
`;

const Form = styled.form`
  width: 700px;
  border: 1px solid lightgray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 30px;

  @media (max-width: 710px) {
    border: none;
  }
`;
const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;

const Label = styled.label`
  font-size: 15px;
  font-weight: 500;
  &::first-letter {
    text-transform: capitalize;
  }
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 100%;
`;
const Input = styled.input`
  border: 1px solid lightgray;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  padding-left: 10px;
  font-weight: 500;
  transition: all 0.2s cubic-bezier(0, 0, 0, 0);
  outline: 1px solid transparent;

  &:hover,
  &:focus {
    border: 1px solid #7952b3;
    outline: 1px solid #7952b3;
  }
`;

const ProfileLabel = styled.label`
  height: 60px;
  border: 1px dashed #7952b3;
  width: 250px;
  border-radius: 5px;
  display: grid;
  place-items: center;
  font-weight: 600;
  color: #7952b3;
  font-size: 14px;
  background: #7952b330;
  cursor: pointer;
`;

const Select = styled.select`
  border: 1px solid lightgray;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  padding-left: 10px;
  font-weight: 500;
  transition: all 0.2s cubic-bezier(0, 0, 0, 0);
  outline: 1px solid transparent;

  &:hover,
  &:focus {
    border: 1px solid #7952b3;
    outline: 1px solid #7952b3;
  }
`;

const Option = styled.option``;

const Info = styled.label`
  color: gray;
  font-size: 14px;
  font-weight: 500;
`;

const Button = styled.button`
  height: 40px;
  width: 120px;
  align-self: flex-end;
  border-radius: 5px;
  font-size: 15px;
  color: white;
  font-weight: 500;
  background: #7952b3;
  border: none;
  outline: none;
  cursor: pointer;
`;

const Dashboard = () => {

  const [isSelected, setIsSelected] = useState(false);

  const [inputs, setInputs] = useState({
    firstName: null,
    lastName: null,
    profileImage: null,
    gender: "male",
    countryCode: "+91",
    mobile: null,
    currCity: null,
    secondCity: null,
    edu: null,
    eduStatus: null,
    startYear: null,
    endYear: null,
    course: null,
    performance: null

  });

  const handleChange = (event) => {
    if (event.target.name === "edu") {
      setIsSelected(true);
    }
    setInputs({ ...inputs, [event.target.name]: event.target.value })
  }
  const handleImage = (event) => {
    setInputs({ ...inputs, profileImage: event.target.files[0] })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", inputs?.firstName);
    formData.append("lastName", inputs?.lastName);
    formData.append("profileImage", inputs?.profileImage, inputs?.profileImage.name);
    formData.append("gender", inputs?.gender);
    formData.append("countryCode", inputs?.countryCode);
    formData.append("mobile", inputs?.mobile);
    formData.append("currCity", inputs?.currCity);
    formData.append("secondCity", inputs?.secondCity);
    formData.append("edu", inputs?.edu);
    formData.append("eduStatus", inputs?.eduStatus);
    formData.append("startYear", inputs?.startYear);
    formData.append("endYear", inputs?.endYear);
    formData.append("course", inputs?.course);
    formData.append("performance", inputs?.performance);

    try {
      const res = await axios.post("http://localhost:8000/details/personal", formData);
      toast(res.data)

    } catch (error) {
      if(error.response.data.includes("Personal validation failed")){
        toast("Fill all details!")
      }
      else{
        toast("Something went wrong, please try again!")
      }
    }


  };




  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FlexDiv>
          <InputDiv>
            <Label htmlFor="firstName">First name</Label>
            <Input
              id="firstName"
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              required={true}

            />
          </InputDiv>

          <InputDiv>
            <Label htmlFor="fLame">Last name</Label>
            <Input
              id="lastName"
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              required={true}

            />
          </InputDiv>
        </FlexDiv>
        <InputDiv>
          <Label htmlFor="profileImageLabel">Profile picture</Label>
          <ProfileLabel id="profileImageLabel" htmlFor="profileImage">
            {inputs?.profileImage ? `${inputs?.profileImage.name}`: "Upload image"}
          </ProfileLabel>
          <input
            style={{ opacity: 0, pointerEvents: "none" }}
            id="profileImage"
            type="file"
            name="profileImage"
            onChange={handleImage}
            required={true}
            accept="image/*"
          />
        </InputDiv>

        <InputDiv>
          <Label htmlFor="gender">Gender</Label>
          <Select id="gender" name="gender" onChange={handleChange}
            required={true}>
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="others">Others</Option>
            <Option value="nil">Prefer not to say</Option>
          </Select>
        </InputDiv>

        <InputDiv>
          <Label htmlFor="mobile">Mobile number</Label>
          <FlexDiv>
            <Input
              id="countryCode"
              name="countryCode"
              style={{ flex: 1 }}
              onChange={handleChange}
              defaultValue={"+91"}

            />
            <Input
              type="number"
              placeholder="Your 10 digit mobile number"
              style={{ flex: 3 }}
              name="mobile"
              onChange={handleChange}
              required={true}

            />
          </FlexDiv>
        </InputDiv>
        <InputDiv>
          <Label htmlFor="currCity">Current location</Label>
          <Info htmlFor="currCity">
            Please enter the location where you currently live
          </Info>
          <Input
            type="text"
            id="currCity"
            placeholder="Current city"
            name="currCity"
            onChange={handleChange}
            required={true}

          />
        </InputDiv>
        <InputDiv>
          <Label htmlFor="secondCity">Second location (optional)</Label>
          <Info htmlFor="secondCity">
            If you study in one location (say Delhi) but are from a different
            location (say Chennai)
          </Info>
          <Input
            type="text"
            id="secondCity"
            placeholder="Second city"
            name="secondCity"
            onChange={handleChange}
            required={true}

          />
        </InputDiv>
        <InputDiv>
          <Label htmlFor="edu">Current/highest level of education</Label>
          <Select id="edu" name="edu" onChange={handleChange}
            required={true}>
            <Option>Select</Option>
            <Option value="graduation">Graduation</Option>
            <Option value="post graduation">Post graduation</Option>
          </Select>
        </InputDiv>
        {isSelected && (
          <>
            <InputDiv>
              <Label htmlFor="eduStatus"> status</Label>
              <FlexDiv style={{ justifyContent: "flex-start" }}>
                <input
                  id="eduStatus"
                  type="radio"
                  value="pursuing"
                  name="eduStatus"
                  onChange={handleChange}
                  required={true}

                />
                <Label>Pursuing</Label>
              </FlexDiv>
              <FlexDiv style={{ justifyContent: "flex-start" }}>
                <input
                  id="eduStatus"
                  type="radio"
                  value="completed"
                  name="eduStatus"
                  onChange={handleChange}
                  required={true}

                />
                <Label>Completed</Label>
              </FlexDiv>
            </InputDiv>
            <FlexDiv>
              <InputDiv>
                <Label htmlFor="startYear">Start year</Label>
                <Input
                  id="startYear"
                  type="number"
                  placeholder="E.g 2021"
                  name="startYear"
                  onChange={handleChange}
                  required={true}

                />
              </InputDiv>
              <InputDiv>
                <Label htmlFor="endYear">
                  end year
                </Label>
                <Input
                  id="endYear"
                  type="number"
                  placeholder="E.g 2024"
                  name="endYear"
                  onChange={handleChange}
                  required={true}

                />
              </InputDiv>
            </FlexDiv>
            <FlexDiv>
              <InputDiv>
                <Label htmlFor="course">Course</Label>
                <Input
                  id="course"
                  type="text"
                  placeholder="E.g BCA, BTech"
                  name="course"
                  onChange={handleChange}
                  required={true}

                />
              </InputDiv>
              <InputDiv>
                <Label htmlFor="performance">Performance (sgpa)</Label>
                <Input
                  type="number"
                  step="0.01"
                  id="performance"
                  placeholder="0.00"
                  name="performance"
                  onChange={handleChange}
                  required={true}

                />
              </InputDiv>
            </FlexDiv>
          </>
        )}
        <Button type="submit">Save & next</Button>
      </Form>
      <Toaster/>
    </Container>
  );
};
export default Dashboard;
