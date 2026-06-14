def build_prompt(role: str, experience: str, topic: str, mode: str,
                 user_answer: str = None, question: str = None) -> str:
    base = f"Role: {role} | Experience: {experience} | Topic: {topic}"

    prompts = {
        "hr": f"""You are an expert HR interviewer. Generate 8 thoughtful HR interview questions for:
{base}

Focus on behavioral questions, cultural fit, communication, teamwork, and career goals.
Format each question on a new line, numbered. After all questions, add a brief tip section.""",

        "technical": f"""You are a senior technical interviewer at a top tech company. Generate 8 challenging technical interview questions for:
{base}

Include a mix of concept questions, problem-solving scenarios, and practical application questions.
For each question, briefly mention what skill it tests. Format numbered.""",

        "mock": f"""You are conducting a live mock interview. Begin the mock interview session for:
{base}

Start with a warm welcome, then ask your first interview question (mix of HR and technical based on topic).
Be conversational, encouraging, and professional. Wait for the candidate's response before proceeding.""",

        "roadmap": f"""You are a career coach and technical mentor. Create a detailed 4-week interview preparation roadmap for:
{base}

Structure it as:
- Week 1: Foundations
- Week 2: Core Concepts
- Week 3: Practice & Projects
- Week 4: Mock Interviews & Polish

For each week, list specific resources, topics to cover, and daily time estimates.""",

        "evaluation": f"""You are an expert interviewer evaluating a candidate's answer.

Question: {question}
Candidate's Answer: {user_answer}

Candidate Context: {base}

Evaluate the answer on:
1. Accuracy & Correctness (0-10)
2. Depth & Detail (0-10)
3. Communication Clarity (0-10)
4. Overall Score (0-10)

Provide:
- Strengths of the answer
- Areas to improve
- A model answer or key points they missed
- Final verdict: Excellent / Good / Needs Work""",

        "top10": f"""You are a technical recruiter who has conducted 1000+ interviews. List the TOP 10 most frequently asked and most important interview questions for:
{base}

For each question:
- State the question clearly
- Explain WHY it is commonly asked
- Give a brief hint on how to approach the answer

Format them numbered 1-10."""
    }

    return prompts.get(mode, prompts["technical"])
