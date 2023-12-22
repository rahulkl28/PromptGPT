import 'bootstrap/dist/css/bootstrap.min.css';
import Feed from '../../components/Feed';

const Home = () => {
  return(
    <section className='w-100 d-flex align-items-center flex-column'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='d-md-none' />
      <span className='orange_gradient text-center'> AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
      PromptGPT is an open-source AI prompting tool for the modern world to
      discover, create, and share creative prompts
    </p>
    <Feed />
  </section>
  
  )
}

export default Home


