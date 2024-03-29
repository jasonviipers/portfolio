import { relations, sql } from "drizzle-orm";
import {
  index,
  integer,
  pgTableCreator,
  primaryKey,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { type AdapterAccount } from "next-auth/adapters";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `porfolio_${name}`);


export const users = createTable("user", {
  id: varchar("id", { length: 255 }).notNull().primaryKey(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull(),
  emailVerified: timestamp("emailVerified", {
    mode: "date",
  }).default(sql`CURRENT_TIMESTAMP`),
  image: varchar("image", { length: 255 }),
});

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
}));

export const accounts = createTable(
  "account",
  {
    userId: varchar("userId", { length: 255 })
      .notNull()
      .references(() => users.id),
    type: varchar("type", { length: 255 })
      .$type<AdapterAccount["type"]>()
      .notNull(),
    provider: varchar("provider", { length: 255 }).notNull(),
    providerAccountId: varchar("providerAccountId", { length: 255 }).notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: varchar("token_type", { length: 255 }),
    scope: varchar("scope", { length: 255 }),
    id_token: text("id_token"),
    session_state: varchar("session_state", { length: 255 }),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
    userIdIdx: index("account_userId_idx").on(account.userId),
  })
);

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, { fields: [accounts.userId], references: [users.id] }),
}));

export const sessions = createTable(
  "session",
  {
    sessionToken: varchar("sessionToken", { length: 255 })
      .notNull()
      .primaryKey(),
    userId: varchar("userId", { length: 255 })
      .notNull()
      .references(() => users.id),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (session) => ({
    userIdIdx: index("session_userId_idx").on(session.userId),
  })
);

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, { fields: [sessions.userId], references: [users.id] }),
}));

export const verificationTokens = createTable(
  "verificationToken",
  {
    identifier: varchar("identifier", { length: 255 }).notNull(),
    token: varchar("token", { length: 255 }).notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
);
// Schema for Product
export const product = createTable("product", {
  id: varchar("id", { length: 255 }).notNull().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  price: integer("price").notNull(),
  category: varchar("category", { length: 255 }).notNull(),
  product_filesId: varchar("product_filesId", { length: 255 }).notNull(),
  approvedForSale: varchar("approvedForSale", { length: 255 }),
  priceId: varchar("priceId", { length: 255 }),
  stripeId: varchar("stripeId", { length: 255 }),
  updatedAt: timestamp("updatedAt", { mode: "date" }).notNull(),
  createdAt: timestamp("createdAt", { mode: "date" }).notNull(),
});

export const productsRelations = relations(product, ({ one }) => ({
  product_files: one(product_files, {
    fields: [product.product_filesId],
    references: [product_files.id],
  }),
}));

// Schema for ProductFile
export const product_files = createTable("product_file", {
  id: varchar("id", { length: 255 }).notNull().primaryKey(),
  updatedAt: timestamp("updatedAt", { mode: "date" }).notNull(),
  createdAt: timestamp("createdAt", { mode: "date" }).notNull(),
  url: varchar("url", { length: 255 }),
  filename: varchar("filename", { length: 255 }),
  mimeType: varchar("mimeType", { length: 255 }),
  filesize: integer("filesize"),
  width: integer("width"),
  height: integer("height"),
});

export const product_filesRelations = relations(product_files, ({ one }) => ({}));

// Schema for Media
export const media = createTable("media", {
  id: varchar("id", { length: 255 }).notNull().primaryKey(),
  updatedAt: timestamp("updatedAt", { mode: "date" }).notNull(),
  createdAt: timestamp("createdAt", { mode: "date" }).notNull(),
  url: varchar("url", { length: 255 }),
  filename: varchar("filename", { length: 255 }),
  mimeType: varchar("mimeType", { length: 255 }),
  filesize: integer("filesize"),
  width: integer("width"),
  height: integer("height"),
});

export const mediaRelations = relations(media, ({ one }) => ({}));

export const product_images = createTable("product_image", {
  id: varchar("id", { length: 255 }).notNull().primaryKey(),
  product_id: varchar("product_id", { length: 255 }).notNull(),
  image: varchar("image", { length: 255 }),
});
