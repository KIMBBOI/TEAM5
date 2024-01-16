package com.kh.app.adoptionnews.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.kh.app.adoptionnews.dao.AdoptionNewsBoardDao;
import com.kh.app.adoptionnews.dao.AdoptionNewsDao;
import com.kh.app.adoptionnews.vo.AdoptionNewsVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdoptionNewsService {
	
	private final AdoptionNewsDao dao;
	private final AdoptionNewsBoardDao boardDao;
	private final SqlSessionTemplate sst;
	
//	public int insert(AdoptionNewsVo vo) {
//		return dao.insert(sst, vo);
//	}

	// 입양 후 소식 작성
	public int newsWrite(AdoptionNewsVo vo) {
		
		String str = vo.getImageNo().replace("D:\\pupple\\springRepo\\team5final\\team5\\src\\main\\webapp", "http://127.0.0.1:8080/app");
		vo.setImagePath(str);
		
//		if (vo.getTitle().length() < 1) {
//			throw new IllegalStateException();
//		}
		return dao.newsWrite(sst, vo);
	}

	// 입양 후 소식 목록
	public List<AdoptionNewsVo> list() {
		List<AdoptionNewsVo> newsList = dao.list(sst);
		// imagePath 설정
		for (AdoptionNewsVo news : newsList) {
			String imagePath = news.getImageNo().replace("D:\\pupple\\springRepo\\team5final\\team5\\src\\main\\webapp", "http://127.0.0.1:8080/app");
			news.setImagePath(imagePath);
		}
		return dao.list(sst);
	}

	// 입양 후 소식 상세 조회
	// 단일조회 (+조회수증가)
	public AdoptionNewsVo detail(String no) {
		AdoptionNewsVo news = dao.detail(sst, no);
		// imagePath 설정
		String imagePath = news.getImagePath().replace("D:\\dev\\springRepo\\springPrj99\\src\\main\\webapp", "http://127.0.0.1:8888/app");
		news.setImagePath(imagePath);
		return news;
	}

	// 입양 후 소식 수정
	public int edit(AdoptionNewsVo vo) {
		if (vo != null && vo.getTitle() != null && vo.getTitle().length() < 1) {
			throw new IllegalStateException("제목 너무 짧음 ...");
		}
		return dao.edit(sst, vo);
	}

	// 입양 후 소식 삭제
	public int delete(String no) {
		return dao.delete(sst, no);
	}

	public int newsBoardWrite(AdoptionNewsVo vo) {
		return boardDao.newsBoardWrite(sst,vo);
		
	}

	
}
