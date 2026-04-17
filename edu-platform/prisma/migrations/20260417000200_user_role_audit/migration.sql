CREATE TABLE "user_role_audit_logs" (
  "id" SERIAL NOT NULL,
  "actorUserId" UUID NOT NULL,
  "targetUserId" UUID NOT NULL,
  "previousRole" "UserRole" NOT NULL,
  "newRole" "UserRole" NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "user_role_audit_logs_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "user_role_audit_logs_actorUserId_idx" ON "user_role_audit_logs"("actorUserId");
CREATE INDEX "user_role_audit_logs_targetUserId_idx" ON "user_role_audit_logs"("targetUserId");
CREATE INDEX "user_role_audit_logs_createdAt_idx" ON "user_role_audit_logs"("createdAt");

ALTER TABLE "user_role_audit_logs"
ADD CONSTRAINT "user_role_audit_logs_actorUserId_fkey"
FOREIGN KEY ("actorUserId") REFERENCES "users"("id")
ON DELETE NO ACTION ON UPDATE CASCADE;

ALTER TABLE "user_role_audit_logs"
ADD CONSTRAINT "user_role_audit_logs_targetUserId_fkey"
FOREIGN KEY ("targetUserId") REFERENCES "users"("id")
ON DELETE NO ACTION ON UPDATE CASCADE;
