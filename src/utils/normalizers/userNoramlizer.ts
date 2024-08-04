export function normalizedUser(data: any) {
    return {
        picture: data?.picture || '',
        name: data?.name || '',
        email: data?.email || '',
        full_name: data?.full_name || '',
        phone_verified: data?.phone_verified || false,
        id: data?.sub || '',
        // Map other fields as necessary
    };
}