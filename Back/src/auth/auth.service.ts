import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findUser(username);
    const isPassawordMatch = await bcrypt.compare(password, user.password);
    if (user && isPassawordMatch) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = {
      username: user.username,
      userId: user._id,
      roles: user.roles,
    };
    return {
      acess_token: this.jwtService.sign(payload),
    };
  }
}
