import styled from 'styled-components'
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    padding: 10px;
    overflow: auto;
    padding: 0px 0px 100px 0px;

    @media (max-width: 600px){
          gap:2px;
    }
`
const Heading = styled.h1`
    font-weight: 600;
    `

const Info = styled.label`
    color: gray;
    font-size: 14px;
    font-weight: 500;
    width: auto;

    @media (max-width: 600px){
        width: 100%;
        padding: 25px;
    }
    
`
// Main Skill div
const SkillDiv = styled.div`
    position: relative;
    margin-top: 10px;
    min-height: 300px;
    min-width: 600px;
    border: 1px solid lightgray;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    width: 500px;
    align-items: flex-start;
    gap: 20px;
    padding: 30px;
    padding-bottom: 200px;

    @media (max-width: 600px){
        min-width: 0px;
        width: 90%;
    }
    
`
const SkillItem = styled.div`
    padding: 10px;
    display: flex;
    gap: 10px;
    align-items: center;
    width: fit-content;
    border: 2px solid lightgray;
    border-radius: 10px;
    transition: all 0.2s cubic-bezier(0,0,0,0);

    &:hover{
        border: 2px solid #7952B3;
    }
`

const SkillName = styled.p`
    font-size: 15px;
    font-weight: 600;
`
const SkillDelete = styled.span`
    cursor: pointer;
    color: #7952B3;
`
const AddSkillHeading = styled.p`
    font-weight: 500;
    font-size: 16px;
`

const SkillAddDiv = styled.form`
    position: absolute;
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 10px;
    width: 100%;
    bottom: 0;
    right: 0;
`

const FormBtn = styled.button`
    border: none;
    font-weight: 500;
    font-size: 15px;
    color:white;
    background: #7952B3;
    padding: 10px;
    width: 100px;
    border-radius: 5px;
    cursor: pointer;
    
`

const SkillInput = styled.input`
    width: 100%;
    height: 40px;
    padding-left:10px;
    border: 1px solid lightgray;
    outline: 1px solid transparent;
    border-radius: 5px;
    transition: all 0.2s cubic-bezier(0,0,0,0); 
    font-weight: 500;

    &:hover , &:focus{
        border: 1px solid #7952B3;
        outline: 1px solid #7952B3;
    }
`

const Skills = () => {


    const FakeSkills = [
        "JavaScript",
        "Python",
        "C language",
        "C++",
        "Java",
        "Ruby",
        "PL/SQL"
    ]


    return (
        <Container>
            <Heading>Skills</Heading>
            <Info>Include at least 3-5 of your top skills to help your applications stand out</Info>
            <SkillDiv>
                {
                    FakeSkills.map((skill, key) => {
                        return (
                            <SkillItem key={key}>
                                <SkillName>{skill}</SkillName>
                                <SkillDelete>
                                    <DeleteOutlineRoundedIcon />
                                </SkillDelete>
                            </SkillItem>
                        )
                    })
                }

                <SkillAddDiv>
                    <AddSkillHeading>Add skills</AddSkillHeading>
                    <SkillInput />
                    <FormBtn>Confirm</FormBtn>
                </SkillAddDiv>
            </SkillDiv>
        </Container>
    )
}

export default Skills