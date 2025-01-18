document.addEventListener("DOMContentLoaded", function () {
  const solutions = [
    {
      title: 'Sea-Level Rise and Coastal Flooding',
      author: 'Dr. Anjali Mehta',
      description: 'Indian cities like Mumbai, Kochi, and Jaipur can enhance climate resilience by implementing nature-based solutions (NbS) such as urban green spaces, wetland restoration, and increased tree cover to address urban challenges like flooding, heat stress, and air pollution, while actively engaging local communities through participatory planning and educational campaigns to ensure culturally tailored solutions, foster ownership, and promote collective action for sustainable urban development.',
      impact: 'approx 4.24 million people to be affected',
      votes: 324,
      dislikes: 10,
      timeline: '2022-2040',
      data: [
        { month: 'Jan', temperature: 32 },
        { month: 'Feb', temperature: 30 },
        { month: 'Mar', temperature: 28 },
        { month: 'Apr', temperature: 26 },
      ],
      replies: []
    },
    {
      title: 'Coastal Restoration Project', 
      author: 'Prof. Rajesh Kumar',
      description: 'Mangrove restoration protecting 15km of coastline from storm surge and erosion in Sundarbans, India. This project not only enhances coastal resilience but also creates new habitats for marine life and supports local fishing communities.',
      impact: 'Protected 12,000 residents and increased local biodiversity by 40%',
      votes: 289,
      dislikes: 5,
      timeline: '2025-Present',
      data: [
        { month: 'Jan', erosion: 15 },
        { month: 'Feb', erosion: 12 },
        { month: 'Mar', erosion: 8 },
        { month: 'Apr', erosion: 5 },
      ],
      replies: []
    },
    {
      title: 'Community Water Management',
      author: 'Sarah Johnson, Environmental Engineer',
      description: 'Implemented rainwater harvesting systems in drought-prone regions of Rajasthan, India. This community-driven initiative combines modern technology with traditional water conservation practices, ensuring sustainable water access during dry seasons.',
      impact: 'Serving 50,000 households and reducing water demand by 30%',
      votes: 256,
      dislikes: 8,
      timeline: '2022-2040',
      data: [
        { month: 'Jan', savings: 1000 },
        { month: 'Feb', savings: 1200 },
        { month: 'Mar', savings: 1500 },
        { month: 'Apr', savings: 1800 },
      ],
      replies: []
    }
  ];

  const resources = [
    {
      title: 'IPCC Climate Assessment Report 2023',
      description: 'Comprehensive analysis of climate change impacts, adaptation strategies, and mitigation options from the Intergovernmental Panel on Climate Change.',
      type: 'Research Report',
      downloads: 15234,
      lastUpdated: '2023-09-15'
    },
    {
      title: 'Community Climate Resilience Framework',
      description: 'Detailed step-by-step guide for communities to assess vulnerabilities and build effective climate resilience strategies. Includes case studies and templates.',
      type: 'Implementation Guide',
      downloads: 8567,
      lastUpdated: '2023-10-01'
    },
    {
      title: 'Climate Risk Assessment Toolkit',
      description: 'Interactive digital tool with data visualization capabilities for evaluating local climate vulnerabilities and creating adaptation plans.',
      type: 'Digital Tool',
      downloads: 12890,
      lastUpdated: '2023-11-30'
    }
  ];

  const reports = [];

  const solutionsContainer = document.getElementById('solution-cards-container');
  const reportList = document.getElementById('reports-list');
  const resourceCardsContainer = document.getElementById('resource-cards-container');

  function populateSolutions() {
    solutionsContainer.innerHTML = '';
    solutions.forEach((solution, index) => {
      const solutionCard = document.createElement('div');
      solutionCard.classList.add('solution-card');
      solutionCard.innerHTML = `
        <h3>${solution.title}</h3>
        <p class="solution-author">Proposed by: ${solution.author}</p>
        <p class="solution-description">${solution.description}</p>
        <div class="solution-meta">
          <span><strong>Impact:</strong> ${solution.impact}</span>
          <span><strong>Timeline:</strong> ${solution.timeline}</span>
        </div>
        <div class="solution-actions">
          <button class="vote-button" data-index="${index}">Support (${solution.votes})</button>
          <button class="dislike-button" data-index="${index}">Dislike (${solution.dislikes})</button>
        </div>
        <div class="replies" id="replies-${index}" style="display: none;">
          <h4>Replies</h4>
          <div class="reply-list" id="reply-list-${index}"></div>
          <textarea class="reply-input" id="reply-input-${index}" placeholder="Write a reply..."></textarea>
          <button class="reply-button" data-index="${index}">Reply</button>
        </div>
        <button class="toggle-reply" data-index="${index}">Show Replies</button>
      `;
      solutionsContainer.appendChild(solutionCard);
    });

    // Add event listeners for buttons
    document.querySelectorAll('.vote-button').forEach(button => {
      button.addEventListener('click', function() {
        const index = this.getAttribute('data-index');
        solutions[index].votes++;
        this.textContent = `Support (${solutions[index].votes})`;
      });
    });

    document.querySelectorAll('.dislike-button').forEach(button => {
      button.addEventListener('click', function() {
        const index = this.getAttribute('data-index');
        solutions[index].dislikes++;
        this.textContent = `Dislike (${solutions[index].dislikes})`;
      });
    });

    document.querySelectorAll('.reply-button').forEach(button => {
      button.addEventListener('click', function() {
        const index = this.getAttribute('data-index');
        const replyInput = document.getElementById(`reply-input-${index}`);
        const replyText = replyInput.value.trim();
        if (replyText) {
          solutions[index].replies.push(replyText);
          updateReplies(index);
          replyInput.value = '';
        }
      });
    });

    document.querySelectorAll('.toggle-reply').forEach(button => {
      button.addEventListener('click', function() {
        const index = this.getAttribute('data-index');
        const replySection = document.getElementById(`replies-${index}`);
        if (replySection.style.display === 'none') {
          replySection.style.display = 'block';
          this.textContent = 'Hide Replies';
          updateReplies(index);
        } else {
          replySection.style.display = 'none';
          this.textContent = 'Show Replies';
        }
      });
    });
  }

  function updateReplies(index) {
    const replyList = document.getElementById(`reply-list-${index}`);
    replyList.innerHTML = '';
    solutions[index].replies.forEach(reply => {
      const replyItem = document.createElement('p');
      replyItem.textContent = reply;
      replyList.appendChild(replyItem);
    });
  }

  function populateResources() {
    resourceCardsContainer.innerHTML = '';
    resources.forEach((resource) => {
      const resourceCard = document.createElement('div');
      resourceCard.classList.add('card');
      resourceCard.innerHTML = `
        <h3>${resource.title}</h3>
        <p class="resource-description">${resource.description}</p>
        <div class="resource-meta">
          <span class="resource-type">${resource.type}</span>
          <span class="resource-downloads">Downloads: ${resource.downloads.toLocaleString()}</span>
          <span class="resource-date">Last Updated: ${resource.lastUpdated}</span>
        </div>
        <button class="download-button">Download Resource</button>
      `;
      resourceCardsContainer.appendChild(resourceCard);
    });
  }

  function updateReports() {
    reportList.innerHTML = '';
    reports.forEach((report) => {
      const reportCard = document.createElement('div');
      reportCard.classList.add('card');
      reportCard.innerHTML = `
        <h4>${report.title}</h4>
        <p>${report.description}</p>
        <p><strong>Location:</strong> ${report.location}</p>
        <p><strong>Date:</strong> ${report.date}</p>
        <p><strong>Type:</strong> ${report.type}</p>
        <p><strong>Severity:</strong> ${report.severity}/10</p>
      `;
      reportList.appendChild(reportCard);
    });
    
    document.getElementById('reports-count').textContent = reports.length;
  }

  // Tab Switching Logic
  const tabs = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      tabContents.forEach(content => {
        content.style.display = 'none';
      });
      
      const activeTabContent = document.getElementById(tab.id.replace('-tab', '-content'));
      activeTabContent.style.display = 'block';
    });
  });

  // Form submission handlers
  document.getElementById('impact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const report = {
      title: document.getElementById('impact-title').value,
      location: document.getElementById('impact-location').value,
      date: document.getElementById('impact-date').value,
      description: document.getElementById('impact-description').value,
      type: document.getElementById('impact-type').value,
      severity: document.getElementById('impact-severity').value
    };
    reports.push(report);
    updateReports();
    this.reset();
  });

  document.getElementById('solution-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const solution = {
      title: document.getElementById('solution-title').value,
      author: document.getElementById('solution-author').value,
      description: document.getElementById('solution-description').value,
      impact: document.getElementById('solution-impact').value,
      timeline: document.getElementById('solution-timeline').value,
      category: document.getElementById('solution-category').value,
      challenges: document.getElementById('solution-challenges').value,
      votes: 0,
      dislikes: 0,
      replies: []
    };
    solutions.push(solution);
    populateSolutions();
    this.reset();
  });

  // Initialize
  populateSolutions();
  populateResources();
  updateReports();

  document.getElementById('active-projects').textContent = solutions.length;
  document.getElementById('resources-count').textContent = resources.length;
  document.getElementById('reports-count').textContent = reports.length;

  // Set default tab
  document.getElementById('solutions-tab').click();
});
