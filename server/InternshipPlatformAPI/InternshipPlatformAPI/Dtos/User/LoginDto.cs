﻿namespace InternshipPlatformAPI.Dtos.User
{
    public class LoginDto
    {
        public string UserName { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public bool rememberMe { get; set; } = false;
    }
}
