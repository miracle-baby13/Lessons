


describe('TestingAPIs - API Tests', () => {

  it('TC01 GET - API should return query parameters correctly', () => {

    cy.request({
      method: 'GET',
      url: 'https://api.testingapis.com/api/echo',
      qs: {
        name: 'Mucize',
        city: 'Ankara'
      }
    }).then((response) => {

      expect(response.status).to.eq(200);
      expect(response.body.method).to.eq('GET');
      expect(response.body.query.name).to.eq('Mucize');
      expect(response.body.query.city).to.eq('Ankara');

    });

  });

});

 
it('TC02 GET - API should return custom headers correctly', () => {

  cy.request({
    method: 'GET',
    url: 'https://api.testingapis.com/api/echo',
    headers: {
      'x-custom-header': 'GoIT-QA',
      'Accept': 'application/json'
    }
  }).then((response) => {

    expect(response.status).to.eq(200);
    expect(response.body.headers['x-custom-header']).to.eq('GoIT-QA');
    expect(response.body.headers['Accept']).to.eq('application/json');

  });

});

it('TC03 POST - API should receive and return request body correctly', () => {

  cy.request({
    method: 'POST',
    url: 'https://api.testingapis.com/api/echo',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      name: 'Mucize',
      role: 'QA Tester',
      city: 'Ankara'
    }
  }).then((response) => {

    expect(response.status).to.eq(200);
    expect(response.body.method).to.eq('POST');
    expect(response.body.json.name).to.eq('Mucize');
    expect(response.body.json.role).to.eq('QA Tester');
    expect(response.body.json.city).to.eq('Ankara');

  });

});

it('TC04 PUT - API should receive updated data correctly', () => {

  cy.request({
    method: 'PUT',
    url: 'https://api.testingapis.com/api/echo',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      name: 'Mucize',
      role: 'Senior QA Tester',
      city: 'Berlin'
    }
  }).then((response) => {

    expect(response.status).to.eq(200);
    expect(response.body.method).to.eq('PUT');
    expect(response.body.json.name).to.eq('Mucize');
    expect(response.body.json.role).to.eq('Senior QA Tester');
    expect(response.body.json.city).to.eq('Berlin');

  });

});


it('TC05 PATCH - API should receive partially updated data correctly', () => {

  cy.request({
    method: 'PATCH',
    url: 'https://api.testingapis.com/api/echo',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      city: 'Rome'
    }
  }).then((response) => {

    expect(response.status).to.eq(200);
    expect(response.body.method).to.eq('PATCH');
    expect(response.body.json.city).to.eq('Rome');

  });

});


it('TC06 DELETE - API should receive DELETE request correctly', () => {

  cy.request({
    method: 'DELETE',
    url: 'https://api.testingapis.com/api/echo'
  }).then((response) => {

    expect(response.status).to.eq(200);
    expect(response.body.method).to.eq('DELETE');
    expect(response.body.path).to.eq('/api/echo');

  });

});


it('TC07 GET - API should return dynamic query parameters correctly', () => {

  const randomName = `User${Math.floor(Math.random() * 10000)}`;
  const randomCity = `City${Math.floor(Math.random() * 10000)}`;

  cy.request({
    method: 'GET',
    url: 'https://api.testingapis.com/api/echo',
    qs: {
      name: randomName,
      city: randomCity
    }
  }).then((response) => {

    expect(response.status).to.eq(200);
    expect(response.body.query.name).to.eq(randomName);
    expect(response.body.query.city).to.eq(randomCity);

  });

});


it('TC08 GET - API should respond within acceptable time', () => {
  cy.request({
    method: 'GET',
    url: 'https://api.testingapis.com/api/echo'
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.duration).to.be.lessThan(2000);
  });
});


it('TC09 GET - API should return User-Agent header correctly', () => {
  cy.request({
    method: 'GET',
    url: 'https://api.testingapis.com/api/echo/user-agent',
    headers: {
      'User-Agent': 'GoIT-QA-Tester'
    }
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.userAgent).to.eq('GoIT-QA-Tester');
  });
});

it('TC10 GET - API should return response body in expected format', () => {
  cy.request({
    method: 'GET',
    url: 'https://api.testingapis.com/api/echo',
    qs: {
      name: 'Mucize',
      city: 'Ankara'
    }
  }).then((response) => {
    expect(response.status).to.eq(200);

    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('method');
    expect(response.body).to.have.property('url');
    expect(response.body).to.have.property('query');

    expect(response.body.method).to.eq('GET');
    expect(response.body.query).to.be.an('object');
    expect(response.body.query.name).to.eq('Mucize');
    expect(response.body.query.city).to.eq('Ankara');
  });
});
