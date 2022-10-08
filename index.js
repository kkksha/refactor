import * as React from "react"
import "./../layout.css"
import Layout from "../components/layout";
import {Container, ContainerFluid} from "../components/containers";
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
     ...

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
            <Layout>
                <FirstFrame>
                    <HomeScreen Text={MainDescription} SpecText={MainSpecialTitle} TitleText={MainTitle}
                                ImageMain={'https://strapi.slider.link/' + MainMedia.url}/>
                </FirstFrame>
                <SecondFrame>
                    <SwiperScreen TitleText={BestForTitle} ButtonText={BestForButtonText} Line={Line}
                                  Slider={BestForSlider}/>
                </SecondFrame>
                <Container>
                    <AdaptiveFrame styles="margin-bottom: 180px">
                        <Benefits Pros={ProsCard}/>
                    </AdaptiveFrame>
                </Container>
                <ContainerFluid>
                    <AdaptiveFrame id="examples">
                     <ForthScreen TitleText={ExamplesTitle} Example={LandingExample}/>
                 </AdaptiveFrame>
                </ContainerFluid>
                <Container>
                    <AdaptiveFrame id="features" styles="margin-bottom: 180px">
                        <FifthScreen FeatTitle={FeaturesBlockTitle} Card={FeaturesCard}/>
                    </AdaptiveFrame>
                    <AdaptiveFrame id="reviews">
                        <SixthScreen Cloud={CustomerReviewCloud} Author={Author} CustomerTitle={CustomerTitle}/>
                    </AdaptiveFrame>
                    <AdaptiveFrame>
                        <SeventhScreen Cloud={ExpertCloud} Author={HomePage.Experts.Author} ExpertsTitle={ExpertsTitle}/>
                    </AdaptiveFrame>
                    <AdaptiveFrame id="tariffs">
                        <EightScreen TarifTitle={TarifsTitle} Card={TarifCard}/>
                    </AdaptiveFrame>
                </Container>
                <NinthFrame>
                    <NinthScreen Step={StepCard}/>
                </NinthFrame>
                <TenthFrame>
                    <TenthScreen TextChat={ChatButtonText} Desc={ChatDescription} ChatTitle={ChatTitle}/>
                </TenthFrame>
        </Layout>
        </>
    )

}
const AdaptiveFrame = styled.div`
  margin-bottom: 150px;
  @media (max-width: 1300px) {
    margin-bottom: calc(8vh);
  }
`
const FirstFrame = styled(Container)`
  margin-top: 120px;
  @media (max-width: 1300px) {
    margin-top: calc(2vh);
  }
`
const SecondFrame = styled(Container)`
  margin: 140px 0;
  @media (max-width: 1300px) {
    margin: calc(8vh);
  }
`
const NinthFrame = styled(ContainerFluid)`
  @media (max-width: 1300px) {
    margin-top: calc(8vh);
  }
`
const TenthFrame = styled(Container)`
  @media (max-width: 1300px) {
    margin-top: calc(8vh);
  }
`
export default IndexPage
