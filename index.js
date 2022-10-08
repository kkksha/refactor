import * as React from "react"
import "./../layout.css"
import Layout from "../components/layout";
import HomeScreen from "../components/homeScreen";
import SwiperScreen from "../components/secondScreen";
import styled from "styled-components";
import Benefits from "../components/thirdScreen";
import ForthScreen from "../components/forthScreen";
import FifthScreen from "../components/fifthScreen";
import SixthScreen from "../components/sixthScreen";
import SeventhScreen from "../components/seventhScreen";
import EightScreen from "../components/eightScreen";
import NinthScreen from "../components/ninthScreen";
import TenthScreen from "../components/tenthScreen";
import {graphql, useStaticQuery} from "gatsby";
import Seo from "../components/seo"


const IndexPage = () => {

    const {allStrapiHomePage} = useStaticQuery(graphql`
            query IndexQuery {
 allStrapiHomePage {
    nodes {
     SEO {
        id
        seo_description
        seo_keywords {
          seo_keyword
        }
        seo_title
      }
      BestFor {
        BestForButtonText
        BestForTitle
        BestForSlider {
          url
        }
        Line {
          BestForSpecialText
          BestForTitle
        }
      }
      ChatSlide {
        ChatButtonText
        ChatDescription
        ChatTitle
      }
      CustomerReview {
        CustomerTitle
        CustomerReviewCloud {
          TitleLink
          ReviewText
          Link
        }
        Author {
          AuthorName
          AuthorInfo
          AuthorLogo {
            url
          }
        }
      }
      Examples {
        ExamplesTitle
        LandingExample {
          ExampleCardTitle
          ExamplesSlides {
            url
          }
        }
      }
      Experts {
        ExpertsTitle
        ExpertCloud {
          Link
          ReviewText
          TitleLink
        }
        Author {
          AuthorInfo
          AuthorName
          AuthorLogo {
            url
          }
        }
      }
      Features {
        FeaturesBlockTitle
        FeaturesCard {
          FeaturesDescription
          FeaturesCardIcon {
            url
          }
        }
      }
      Main {
        MainDescription
        MainSpecialTitle
        MainTitle
        MainMedia {
          url
        }
      }
      Pros {
        ProsCard {
          ProsCardTitle
          ProsDescription
          ProsCardIcon {
            url
          }
        }
      }
      Steps {
        StepCard {
          StepArrow {
            url
          }
          StepDescription
          StepTitle
          StepNumber
        }
      }
      Tarifs {
        TarifsTitle
        TarifCard {
          ButtonColor
          CardColor
          Price
          TarifButtonText
          TarifCardTitle
          TarifInfo
          ButtonTextColor
        }
      }
    }
  }
}

        `)

    const HomePage = allStrapiHomePage.nodes[0];
    const {MainDescription, MainSpecialTitle, MainTitle, MainMedia} = HomePage.Main;
    const {BestForButtonText, Line, BestForSlider, BestForTitle} = HomePage.BestFor;
    const {ProsCard} = HomePage.Pros;
    const {ExamplesTitle, LandingExample} = HomePage.Examples
    const {FeaturesBlockTitle, FeaturesCard} = HomePage.Features;
    const {CustomerTitle, Author, CustomerReviewCloud} = HomePage.CustomerReview;
    const {ExpertsTitle, ExpertCloud} = HomePage.Experts;
    const {StepCard} = HomePage.Steps;
    const {TarifsTitle, TarifCard} = HomePage.Tarifs;
    const {ChatButtonText, ChatDescription, ChatTitle} = HomePage.ChatSlide;
    const {seo_description, seo_title, seo_keywords} = HomePage.SEO;
    return (
        <>
            <Seo title={seo_title} description={seo_description} keywords={seo_keywords}/>
            <>
        <Layout>

                <FirstFrame>
                    <HomeScreen Text={MainDescription} SpecText={MainSpecialTitle} TitleText={MainTitle}
                                ImageMain={'https://strapi.slider.link/' + MainMedia.url}/>
                </FirstFrame>
                <SecondFrame>
                    <SwiperScreen TitleText={BestForTitle} ButtonText={BestForButtonText} Line={Line}
                                  Slider={BestForSlider}/>
                </SecondFrame>
                <ThirdFrame>
                    <Benefits Pros={ProsCard}/>
                </ThirdFrame>
                <ForthFrame id="examples">
                    <ForthScreen TitleText={ExamplesTitle} Example={LandingExample}/>
                </ForthFrame>

                <FifthFrame id="features">
                    <FifthScreen FeatTitle={FeaturesBlockTitle} Card={FeaturesCard}/>
                </FifthFrame>
                <SixthFrame id="reviews">
                    <SixthScreen Cloud={CustomerReviewCloud} Author={Author} CustomerTitle={CustomerTitle}/>
                </SixthFrame>
                <SeventhFrame>
                    <SeventhScreen Cloud={ExpertCloud} Author={HomePage.Experts.Author} ExpertsTitle={ExpertsTitle}/>
                </SeventhFrame>
                <EightFrame id="tariffs">
                    <EightScreen TarifTitle={TarifsTitle} Card={TarifCard}/>
                </EightFrame>
                <NinthFrame>
                    <NinthScreen Step={StepCard}/>
                </NinthFrame>
                <TenthFrame>
                    <TenthScreen TextChat={ChatButtonText} Desc={ChatDescription} ChatTitle={ChatTitle}/>
                </TenthFrame>

        </Layout>
        </>
        </>
    )

}
const FirstFrame = styled.div`
  width: 100%;
  max-width: 1665px;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  @media (max-width: 1665px){
    max-width: 1625px;
    padding: 0 40px;
    margin: 0;
  }

  @media only screen and (min-width: 650px) and (max-width: 1300px){
    max-width: calc(100vw - 10px);
    width: 100%;
    padding: 0 20px 0 40px;
    margin: 0;
  }

  @media (max-width: 650px){
    padding: 0 12px;
    margin: 0;
  }
  @media (max-width: 1300px) {
    margin-top: calc(2vh);
  }
`
const SecondFrame = styled.div`
  width: 100%;
  max-width: 1665px;
 
  position: relative;
  box-sizing: border-box;
  @media (max-width: 1665px){
    max-width: 1625px;
    padding: 0 40px;
    margin: 0;
  }

  @media only screen and (min-width: 650px) and (max-width: 1300px){
    max-width: calc(100vw - 10px);
    width: 100%;
    padding: 0 20px 0 40px;
    margin: 0;
  }

  @media (max-width: 650px){
    padding: 0 12px;
    margin: 0;
  }
  margin: 140px 0;
  @media (max-width: 1300px) {
    margin: calc(8vh) 0;
  }
`
const ThirdFrame = styled.div`
  width: 100%;
  max-width: 1665px;
  position: relative;
  box-sizing: border-box;
  @media (max-width: 1665px){
    max-width: 1625px;
    padding: 0 40px;
    margin: 0;
  }

  @media only screen and (min-width: 650px) and (max-width: 1300px){
    max-width: calc(100vw - 10px);
    width: 100%;
    padding: 0 20px 0 40px;
    margin: 0;
  }

  @media (max-width: 650px){
    padding: 0 12px;
    margin: 0;
  }
  margin-bottom: 180px;
  @media (max-width: 1300px) {
    margin-bottom: calc(8vh);
  }
`
const ForthFrame = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;

  margin-bottom: 150px;
  @media (max-width: 1300px) {
    margin-bottom: calc(8vh);
  }
`
const FifthFrame = styled.div`
  width: 100%;
  max-width: 1665px;
  position: relative;
  box-sizing: border-box;
  @media (max-width: 1665px){
    max-width: 1625px;
    padding: 0 40px;
    margin: 0;
  }

  @media only screen and (min-width: 650px) and (max-width: 1300px){
    max-width: calc(100vw - 10px);
    width: 100%;
    padding: 0 20px 0 40px;
    margin: 0;
  }

  @media (max-width: 650px){
    padding: 0 12px;
    margin: 0;
  }
  margin-bottom: 180px;
  @media (max-width: 1300px) {
    margin-bottom: calc(8vh);
  }
`
const SixthFrame = styled.div`
  margin-bottom: 150px;
  width: 100%;
  max-width: 1665px;
  position: relative;
  box-sizing: border-box;
  @media (max-width: 1665px){
    max-width: 1625px;
    padding: 0 40px;
    margin: 0;
  }

  @media only screen and (min-width: 650px) and (max-width: 1300px){
    max-width: calc(100vw - 10px);
    width: 100%;
    padding: 0 20px 0 40px;
    margin: 0;
  }

  @media (max-width: 650px){
    padding: 0 12px;
    margin: 0;
  }
  @media (max-width: 1300px) {
    margin-bottom: calc(8vh);
  }

`
const SeventhFrame = styled.div`
  width: 100%;
  max-width: 1665px;
  position: relative;
  box-sizing: border-box;
  @media (max-width: 1665px){
    max-width: 1625px;
    padding: 0 40px;
    margin: 0;
  }

  @media only screen and (min-width: 650px) and (max-width: 1300px){
    max-width: calc(100vw - 10px);
    width: 100%;
    padding: 0 20px 0 40px;
    margin: 0;
  }

  @media (max-width: 650px){
    padding: 0 12px;
    margin: 0;
  }
  margin-bottom: 150px;
  @media (max-width: 1300px) {
    margin-bottom: calc(8vh);
  }

`
const EightFrame = styled.div`
  width: 100%;
  max-width: 1665px;
  position: relative;
  box-sizing: border-box;
  @media (max-width: 1665px){
    max-width: 1625px;
    padding: 0 40px;
    margin: 0;
  }

  @media only screen and (min-width: 650px) and (max-width: 1300px){
    max-width: calc(100vw - 10px);
    width: 100%;
    padding: 0 20px 0 40px;
    margin: 0;
  }

  @media (max-width: 650px){
    padding: 0 12px;
    margin: 0;
  }
  margin-bottom: 150px;
  @media (max-width: 1300px) {
    margin-bottom: calc(8vh);
  }

`
const NinthFrame = styled.div`
  width: 100%;
  max-width: 1665px;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  @media (max-width: 1665px){
    max-width: 1625px;
    padding: 0 40px;
    margin: 0;
  }

  @media only screen and (min-width: 650px) and (max-width: 1300px){
    max-width: calc(100vw - 10px);
    width: 100%;
    padding: 0 20px 0 40px;
    margin: 0;
  }

  @media (max-width: 650px){
    padding: 0 12px;
    margin: 0;
  }
  @media (max-width: 1300px) {
    margin-top: calc(8vh);
  }
`
const TenthFrame = styled.div`
  width: 100%;
  max-width: 1665px;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  @media (max-width: 1665px){
    max-width: 1625px;
    padding: 0 40px;
    margin: 0;
  }

  @media only screen and (min-width: 650px) and (max-width: 1300px){
    max-width: calc(100vw - 10px);
    width: 100%;
    padding: 0 20px 0 40px;
    margin: 0;
  }

  @media (max-width: 650px){
    padding: 0 12px;
    margin: 0;
  }
  @media (max-width: 1300px) {
    margin-top: calc(8vh);
  }
`
export default IndexPage
