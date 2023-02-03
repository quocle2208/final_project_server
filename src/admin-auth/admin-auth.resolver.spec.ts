import { Test, TestingModule } from '@nestjs/testing';
import { AdminAuthResolver } from './admin-auth.resolver';
import { AdminAuthService } from './admin-auth.service';

describe('AdminAuthResolver', () => {
  let resolver: AdminAuthResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminAuthResolver, AdminAuthService],
    }).compile();

    resolver = module.get<AdminAuthResolver>(AdminAuthResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
