export interface Project {
  title : string;
  description : string;
  link : string;
}

export interface PortfolioData {
  name : string;
  bio : string;
  contact : string;
  phone : string;
  projects: Project[];
}

export const portfolioData : PortfolioData = {
  name : "최서영",
  bio : "프론트엔드 개발자 | React, TypeScript, Node.js",
  contact : "contact@example.com",
  phone : "010-1234-5678",
  projects : [
    {title : "포트폴리오 웹사이트", description : "React와 TypeScript로 제작한 개인 포트폴리오 사이트", link: "#"},
    {title : "E-commerce 프로젝트", description : "Next.js 기반의 온라인 쇼핑몰", link: "#"},
    {title : "오픈소스 기여", description : "다양한 오픈소스 프로젝트에 코드 기여", link: "#"}
   ]
};

export default portfolioData;