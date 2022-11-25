async function verifyToken(token : string) : Promise < boolean > {
    const response = await fetch(
        'http://localhost:8000/api/auth/token/verify/',
        {
            method: 'GET',
            headers: {
                'Authentication': `Bearer ${token}`,	
            }
        }
    );
    return response.ok ? true : false;
}

export default verifyToken;