import logo from './logo.svg';
import './App.css';


function App() {
  // ✅ Define your function inside App()
  const openPage = (url) => {
    window.open(url, "_blank");
  };
  return (
   <body>
    <div className="container">
      
      <div className="header">
        <img src="images/logo.png" alt="Aurigene Logo" className="logo" />
      </div>
 <div className="hubble-logo-text">
    <img src="images/hublogo.png" alt="Hubble Logo" className="hubble-icon"/>
    <h1>HUBBLE.AI</h1>
  </div>
    
      <div className="cards">
        <div
  className="card"
  onClick={() =>
    openPage(
      "https://www.figma.com/make/FxmXfcJ0rOhfouqy3kvXqH/Website-Builder?node-id=0-1&p=f&t=H1eZVPvocVYvxmra-0&fullscreen=1"
    )
  }
>
           <img src="images/doc.png" alt="Documentor Icon" className="icon-img"/>
          <h2>Documentor Agent</h2>
          <p>
            Helps researchers and scientists create high-quality documentation with ease. It uses advanced AI to improve grammar, tone, structure, and consistency while integrating seamlessly with ELNs for a smoother workflow.
          </p>
          <span className="arrow">➜</span>
        </div>

        <div className="card glow-animated" onclick="openPage('https://example.com/translator')">
          <img src="images/trans.png" alt="Documentor Icon" className="icon-img"/>
          <h2>Translator Agent</h2>
          <p>Is a document translation platform that preserves a PDF's original layout while translating. It uses semantic analysis to understand document structure.
          </p>
          <div className="status coming-soon">Coming Soon</div>
          <span className="arrow">➜</span>
        </div>

        <div className="card" onclick="openPage('https://example.com/webscraper')">
          <img src="images/webscrap.png" alt="Documentor Icon" className="icon-img"/>
          <h2>LeadGen Agent</h2>
          <p>Helps users enrich their client databases by automatically searching the web for new leads and contact details. It can also retrieve specific insights like drug discovery.
          </p>
          <div className="status coming-soon">Coming Soon</div>
          <span className="arrow">➜</span>
        </div>

        <div className="card" onclick="openPage('https://example.com/rfresponder')">
          <img src="images/rfi.png" alt="Documentor Icon" className="icon-img"/>
          <h2>RFIresponder Agent</h2>
          <p>Automates replies to RFIs (Request for Information) and RFPs (request for proposal) by using AI to extract relevant details and generate accurate, professional responses.
          </p>
          <div className="status coming-soon">Coming Soon</div>
          <span className="arrow">➜</span>
        </div>

        <div className="card" onclick="openPage('https://example.com/zenai')">
          <img src="images/zenai.png" alt="Documentor Icon" className="icon-img"/>
          <h2>Zen AI</h2>
          <p>Zen AI is an enterprise level in house GPT based search engine fetching results based on prompts related to day to day activities like legal, marketing, scientist, etc.
          </p>
          
          <span className="arrow">➜</span>
        </div>

        <div className="card" onclick="openPage('https://example.com/summarizer')">
          <img src="images/summarize.png" alt="Documentor Icon" className="icon-img"/>
          <h2>Summarizer Agent</h2>
          <p>Connects to SharePoint, one drive and other public websites to summarize content, answer queries and guide users in linking data sources. 
          </p>
          <div className="status coming-soon">Coming Soon</div>
          <span className="arrow">➜</span>
        </div>
      </div>
    </div>
  </body>
  );
}

export default App;
