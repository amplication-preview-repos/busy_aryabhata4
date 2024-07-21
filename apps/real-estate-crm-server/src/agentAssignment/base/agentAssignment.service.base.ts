/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  AgentAssignment as PrismaAgentAssignment,
  Property as PrismaProperty,
  Client as PrismaClient,
} from "@prisma/client";

export class AgentAssignmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AgentAssignmentCountArgs, "select">
  ): Promise<number> {
    return this.prisma.agentAssignment.count(args);
  }

  async agentAssignments(
    args: Prisma.AgentAssignmentFindManyArgs
  ): Promise<PrismaAgentAssignment[]> {
    return this.prisma.agentAssignment.findMany(args);
  }
  async agentAssignment(
    args: Prisma.AgentAssignmentFindUniqueArgs
  ): Promise<PrismaAgentAssignment | null> {
    return this.prisma.agentAssignment.findUnique(args);
  }
  async createAgentAssignment(
    args: Prisma.AgentAssignmentCreateArgs
  ): Promise<PrismaAgentAssignment> {
    return this.prisma.agentAssignment.create(args);
  }
  async updateAgentAssignment(
    args: Prisma.AgentAssignmentUpdateArgs
  ): Promise<PrismaAgentAssignment> {
    return this.prisma.agentAssignment.update(args);
  }
  async deleteAgentAssignment(
    args: Prisma.AgentAssignmentDeleteArgs
  ): Promise<PrismaAgentAssignment> {
    return this.prisma.agentAssignment.delete(args);
  }

  async getProperty(parentId: string): Promise<PrismaProperty | null> {
    return this.prisma.agentAssignment
      .findUnique({
        where: { id: parentId },
      })
      .property();
  }

  async getClient(parentId: string): Promise<PrismaClient | null> {
    return this.prisma.agentAssignment
      .findUnique({
        where: { id: parentId },
      })
      .client();
  }
}
