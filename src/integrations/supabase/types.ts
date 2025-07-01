export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      newsletter_subscriptions: {
        Row: {
          id: number
          email: string
          isActive: boolean
          source: string
          createdAt: string
          updatedAt: string
        }
        Insert: {
          id?: number
          email: string
          isActive?: boolean
          source?: string
          createdAt?: string
          updatedAt?: string
        }
        Update: {
          id?: number
          email?: string
          isActive?: boolean
          source?: string
          createdAt?: string
          updatedAt?: string
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          id: number
          title: string
          content: string
          excerpt: string
          authorName: string
          authorImage: string
          publishedAt: string
          createdAt: string
          updatedAt: string
        }
        Insert: {
          id?: number
          title: string
          content: string
          excerpt: string
          authorName: string
          authorImage: string
          publishedAt?: string
          createdAt?: string
          updatedAt?: string
        }
        Update: {
          id?: number
          title?: string
          content?: string
          excerpt?: string
          authorName?: string
          authorImage?: string
          publishedAt?: string
          createdAt?: string
          updatedAt?: string
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          id: string
          name: string
          email: string
          company: string
          phone: string
          message: string
          service: string
          budget: string
          timeline: string
          createdAt: string
          updatedAt: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          company?: string
          phone?: string
          message: string
          service?: string
          budget?: string
          timeline?: string
          createdAt?: string
          updatedAt?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          company?: string
          phone?: string
          message?: string
          service?: string
          budget?: string
          timeline?: string
          createdAt?: string
          updatedAt?: string
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          id: number
          quote: string
          authorName: string
          authorPosition: string
          company: string
          authorImage: string
          isActive: boolean
          order: number
          createdAt: string
          updatedAt: string
        }
        Insert: {
          id?: number
          quote: string
          authorName: string
          authorPosition: string
          company: string
          authorImage: string
          isActive?: boolean
          order?: number
          createdAt?: string
          updatedAt?: string
        }
        Update: {
          id?: number
          quote?: string
          authorName?: string
          authorPosition?: string
          company?: string
          authorImage?: string
          isActive?: boolean
          order?: number
          createdAt?: string
          updatedAt?: string
        }
        Relationships: []
      }
      job_postings: {
        Row: {
          id: number
          title: string
          department: string
          location: string
          type: string
          salary: string
          description: string
          requirements: string
          responsibilities: string
          benefits: string
          isActive: boolean
          applicationCount: number
          createdAt: string
          updatedAt: string
        }
        Insert: {
          id?: number
          title: string
          department: string
          location: string
          type: string
          salary?: string
          description: string
          requirements: string
          responsibilities: string
          benefits: string
          isActive?: boolean
          applicationCount?: number
          createdAt?: string
          updatedAt?: string
        }
        Update: {
          id?: number
          title?: string
          department?: string
          location?: string
          type?: string
          salary?: string
          description?: string
          requirements?: string
          responsibilities?: string
          benefits?: string
          isActive?: boolean
          applicationCount?: number
          createdAt?: string
          updatedAt?: string
        }
        Relationships: []
      }
      job_applications: {
        Row: {
          id: number
          jobId: number
          firstName: string
          lastName: string
          email: string
          phone: string
          coverLetter: string
          linkedIn: string
          portfolio: string
          experience: string
          education: string
          skills: string
          salary: string
          availability: string
          resumeUrl: string
          createdAt: string
          updatedAt: string
        }
        Insert: {
          id?: number
          jobId: number
          firstName: string
          lastName: string
          email: string
          phone: string
          coverLetter: string
          linkedIn?: string
          portfolio?: string
          experience: string
          education: string
          skills: string
          salary?: string
          availability: string
          resumeUrl?: string
          createdAt?: string
          updatedAt?: string
        }
        Update: {
          id?: number
          jobId?: number
          firstName?: string
          lastName?: string
          email?: string
          phone?: string
          coverLetter?: string
          linkedIn?: string
          portfolio?: string
          experience?: string
          education?: string
          skills?: string
          salary?: string
          availability?: string
          resumeUrl?: string
          createdAt?: string
          updatedAt?: string
        }
        Relationships: []
      }
      case_studies: {
        Row: {
          id: number
          title: string
          subtitle: string
          client: string
          industry: string
          solution: string
          results: string
          imageUrl: string
          isPublished: boolean
          order: number
          createdAt: string
          updatedAt: string
        }
        Insert: {
          id?: number
          title: string
          subtitle: string
          client: string
          industry: string
          solution: string
          results: string
          imageUrl: string
          isPublished?: boolean
          order?: number
          createdAt?: string
          updatedAt?: string
        }
        Update: {
          id?: number
          title?: string
          subtitle?: string
          client?: string
          industry?: string
          solution?: string
          results?: string
          imageUrl?: string
          isPublished?: boolean
          order?: number
          createdAt?: string
          updatedAt?: string
        }
        Relationships: []
      }
      admin_users: {
        Row: {
          id: number
          email: string
          role: string
          isActive: boolean
          startLast: string
          createdAt: string
          updatedAt: string
        }
        Insert: {
          id?: number
          email: string
          role?: string
          isActive?: boolean
          startLast?: string
          createdAt?: string
          updatedAt?: string
        }
        Update: {
          id?: number
          email?: string
          role?: string
          isActive?: boolean
          startLast?: string
          createdAt?: string
          updatedAt?: string
        }
        Relationships: []
      }
      page_views: {
        Row: {
          id: number
          page: string
          userAgent: string
          ipAddress: string
          referer: string
          createdAt: string
        }
        Insert: {
          id?: number
          page: string
          userAgent: string
          ipAddress: string
          referer?: string
          createdAt?: string
        }
        Update: {
          id?: number
          page?: string
          userAgent?: string
          ipAddress?: string
          referer?: string
          createdAt?: string
        }
        Relationships: []
      }
      website_stats: {
        Row: {
          id: number
          projectsDelivered: number
          enterpriseClients: number
          clientSatisfaction: number
          countersViewed: number
          enterpriseId: number
          createdAt: string
          updatedAt: string
        }
        Insert: {
          id?: number
          projectsDelivered?: number
          enterpriseClients?: number
          clientSatisfaction?: number
          countersViewed?: number
          enterpriseId?: number
          createdAt?: string
          updatedAt?: string
        }
        Update: {
          id?: number
          projectsDelivered?: number
          enterpriseClients?: number
          clientSatisfaction?: number
          countersViewed?: number
          enterpriseId?: number
          createdAt?: string
          updatedAt?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
  ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never
