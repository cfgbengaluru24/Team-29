import React, { Component } from 'react';
import './faq.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const PLUS_IMAGE = 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png';
const MINUS_IMAGE = 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png';

const FAQ_DATA = [{
  questionText: ' What is the MOVE platform?',
  answerText: 'MOVE (Market Oriented Value Enhancement) is a practical, replicable approach designed to improve the livelihoods of landless, asset-poor, and often semi-literate or illiterate populations. It helps users understand business concepts and establish successful micro-enterprises through hands-on training.',
},
{
  questionText: 'How can I access the training modules?',
  answerText: 'Training modules can be accessed through the MOVE platform. After logging in, navigate to the "Training Modules" section where you can view and start the modules.',
},
{
  questionText: 'How do I record baseline and inline data?',
  answerText: 'You can record baseline and inline data directly on the platform. Go to the Data Recording section, enter the necessary information for each cycle, and save it. The platform will handle the data storage and processing.',
},
{
  questionText: 'What should I do if I encounter issues while using the platform?',
  answerText: 'If you experience any issues, please refer to the "Helpdesk" section where you can find solutions to common problems. If you need further assistance, you can contact our support team via the "Contact Us" page.',
},
{
  questionText: 'Can I download training materials for offline use?',
  answerText: 'Yes, training materials can be downloaded from the "Downloads" section of the platform. Ensure you have the necessary permissions to download the materials.',
},
{
  questionText: 'How does the platform handle financial data and expense suggestions?',
  answerText: 'The platform includes features for analyzing financial data and providing expense suggestions. You can access these tools in the "Financial Analysis" section, where you can input data and generate reports.',
},
{
  questionText: 'What is the process for creating and managing user accounts?',
  answerText: 'User accounts are created through the "User Management" section. Admins can create, edit, and delete accounts. Users can update their personal information and manage their profiles from the "Account Settings" page.',
},
{
  questionText: 'How can I view FAQs recorded from earlier and existing trainings?',
  answerText: 'To view FAQs from previous trainings, go to the "FAQ Repository" section. Here you can filter FAQs based on baseline data to find relevant answers.',
},
];

class FaqItem extends Component {
  state = {
    isActive: false,
  };

  renderAnswer = () => {
    const { faqData } = this.props;
    const { answerText } = faqData;
    const { isActive } = this.state;

    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      );
    }
    return null;
  };

  onToggleAnswer = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }));
  };

  renderActiveImage = () => {
    const { isActive } = this.state;
    const image = isActive ? MINUS_IMAGE : PLUS_IMAGE;
    const altText = isActive ? 'minus' : 'plus';

    return (
      <button className="button" type="button" onClick={this.onToggleAnswer}>
        <img className="image" src={image} alt={altText} />
      </button>
    );
  };

  render() {
    const { faqData } = this.props;
    const { questionText } = faqData;

    return (
      <li className="list-item-container">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswer()}
      </li>
    );
  }
}

class FaqList extends Component {
  state = {
    searchQuery: '',
  };

  onChangeSearchQuery = event => {
    this.setState({ searchQuery: event.target.value });
  };

  getFilteredFaqs = () => {
    const { searchQuery } = this.state;
    return FAQ_DATA.filter(faq =>
      faq.questionText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answerText.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  render() {
    const filteredFaqs = this.getFilteredFaqs();

    return (
      <div>
        <div className='searchbar'>
          <input
            type="text"
            placeholder="Search FAQs"
            className="search-input"
            onChange={this.onChangeSearchQuery}
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        </div>
        <ul>
          {filteredFaqs.map((item, index) => (
            <FaqItem key={index} faqData={item} />
          ))}
        </ul>
      </div>
    );
  }
}

export default FaqList;
