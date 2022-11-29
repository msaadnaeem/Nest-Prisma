import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { EditUserDto } from './dto';
@Injectable()
export class UserService {
  constructor(private config: ConfigService, private prisma: PrismaService) {}
  async editUser(userId: number, dto: EditUserDto) {
    const user = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        ...dto,
      },
    });
    delete user.hash;
    return user;
  }
}
