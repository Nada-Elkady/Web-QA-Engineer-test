const request = require('supertest');
const apiBaseUrl = 'localhost:8080'; // the base URL of the online API
let token
let patchingToken
let deleteToken



describe('create user', () => {
    test('Returns 200 for creating a user', async () => {
        const response = await request(apiBaseUrl).post('/api/v1/users').send({
            name: 'mentor',
            email: "mentor@gmail.com",
            password: "user123",
        });
        expect(response.statusCode).toBe(200);
    });
    test('Returns 403 for creating a user with missing required fields', async () => {
        const response = await request(apiBaseUrl)
            .post('/api/v1/users')
            .send({
                // Missing 'name', 'email', and 'password' fields
            });
        expect(response.statusCode).toBe(403);
    });

    test('Returns 403 for creating a user with invalid data', async () => {
        const response = await request(apiBaseUrl)
            .post('/api/v1/users')
            .send({
                name: 'invalid',
                email: 'invalid_email', // Invalid email format
                password: 'user123',
            });
        expect(response.statusCode).toBe(403);
    });
});

//AUTHENTICATION AND GETTING USER

describe('authentication and getting user', () => {
    test('Returns authentication token for user', async () => {

        const response = await request(apiBaseUrl).post('/api/v1/auth').send({
            email: "mentor@gmail.com",
            password: "user123",
        });
        expect(response.statusCode).toBe(200);
        token = response._body.token
    });

    test('Returns 403 for accessing an authenticated route without authorization', async () => {
        const response = await request(apiBaseUrl).get('/api/v1/users');
        expect(response.statusCode).toBe(403);
    });

    test('Returns 403 for accessing an authenticated route with an invalid authorization token', async () => {
        const response = await request(apiBaseUrl)
            .get('/api/v1/users')
            .set('Authorization', 'Bearer invalid_token');
        expect(response.statusCode).toBe(403);
    });

    test('Returns authenticated user', async () => {
        const response = await request(apiBaseUrl).get('/api/v1/users').set("Authorization", token)
        expect(response.statusCode).toBe(200);
    });
});

describe('Patching', () => {
    test('Returns 200 for creating a user', async () => {
        const response = await request(apiBaseUrl).post('/api/v1/users').send({
            name: 'mentor2',
            email: "mentor2@gmail.com",
            password: "user123"
        });
        expect(response.statusCode).toBe(200);
    });
    test('Returns authentication token for user', async () => {

        const response = await request(apiBaseUrl).post('/api/v1/auth').send({
            email: "mentor2@gmail.com",
            password: "user123",
        });
        expect(response.statusCode).toBe(200);
        patchingToken = response._body.token
    });
    test('Patching a user', async () => {
        const response = await request(apiBaseUrl).patch('/api/v1/users').send({
            name: 'mentorPatched',
            email: "mentorpatched@gmail.com",
            password: "user123"
        }).set("Authorization", patchingToken);
        expect(response.statusCode).toBe(200);
    });
    test('Returns 403 for patching a user with missing required fields', async () => {
        const response = await request(apiBaseUrl)
            .patch('/api/v1/users')
            .send({
                // Missing 'name', 'email', and 'password' fields
            })
            .set('Authorization', `Bearer ${patchingToken}`);
        expect(response.statusCode).toBe(403);
    });

    test('Returns 403 for patching a user with invalid data', async () => {
        const response = await request(apiBaseUrl)
            .patch('/api/v1/users')
            .send({
                name: 'mentorPatched',
                email: 'invalid_email', // Invalid email format
                password: 'user123',
            })
            .set('Authorization', `Bearer ${patchingToken}`);
        expect(response.statusCode).toBe(403);
    });

    test('Returns 403 for patching a user without authorization', async () => {
        const response = await request(apiBaseUrl)
            .patch('/api/v1/users')
            .send({
                name: 'mentorPatched',
                email: 'mentorpatched@gmail.com',
                password: 'user123',
            });
        expect(response.statusCode).toBe(403);
    });

    test('Returns 403 for patching a user with an invalid authorization token', async () => {
        const response = await request(apiBaseUrl)
            .patch('/api/v1/users')
            .send({
                name: 'mentorPatched',
                email: 'mentorpatched@gmail.com',
                password: 'user123',
            })
            .set('Authorization', 'Bearer invalid_token');
        expect(response.statusCode).toBe(403);
    });

});




describe('Deleting', () => {
    test('Returns 200 for creating a user', async () => {
        const response = await request(apiBaseUrl).post('/api/v1/users').send({
            name: 'mentor3',
            email: "mentor3@gmail.com",
            password: "user123"
        });
        expect(response.statusCode).toBe(200);
    });
    test('Returns authentication token for user', async () => {

        const response = await request(apiBaseUrl).post('/api/v1/auth').send({
            email: "mentor3@gmail.com",
            password: "user123",
        });
        expect(response.statusCode).toBe(200);
        deleteToken = response._body.token
    });

    test('Deleting a user', async () => {
        const response = await request(apiBaseUrl).delete('/api/v1/users').set("Authorization", deleteToken);
        expect(response.statusCode).toBe(200);
    });

    test('Returns 403 for deleting a user without authorization', async () => {
        const response = await request(apiBaseUrl)
            .delete('/api/v1/users')
            .set('Authorization', ''); // Empty authorization token
        expect(response.statusCode).toBe(403);
    });
    test('Returns 403 for deleting a user with an invalid authorization token', async () => {
        const response = await request(apiBaseUrl)
            .delete('/api/v1/users')
            .set('Authorization', 'Bearer invalid_token');
        expect(response.statusCode).toBe(403);


    });

});

describe('deleting all users', () => {
    test('Returns 200 for deleting all users', async () => {
        const response = await request(apiBaseUrl).delete('/api/v1/all-users').send({
            key_admin: "keyadmin123"
        });
        expect(response.statusCode).toBe(200);
    });
});